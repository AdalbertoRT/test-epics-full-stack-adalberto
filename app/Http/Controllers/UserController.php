<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

use Image;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()

    {
        $array = ['msg' => ''];

        $customers = User::orderBy('updated_at', 'DESC')->get();

        $array['customers'] = $customers;
        $array['countCustomers'] = $this->countCustomers();

        return response()->json($array);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $array = ["msg" => ""];

        //VALIDANDO
        $rules = [
            "name" => "string|required|max:50",
            "email" => "string|required|unique:users,email|max:100",
            "phone_number" => "max:|nullable",
            'birthdate' => 'date|nullable',
            "gender" => "string|max:6|nullable",
            "membership" => "string|max:3",
            "ltv" => "numeric|nullable",
            'last_visit' => 'date|nullable',

        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            $array['error'] = $validator->errors()->first();
            return response()->json($array);
        }

        $data = $request->all();

        //CRIANDO O REGISTRO
        $customer = new User();
        $customer->name = $data['name'];
        $customer->email = $data['email'];
        $customer->phone_number = $data['phone_number'];
        $customer->birthdate = $data['birthdate'];
        $customer->gender = $data['gender'];
        $customer->membership = $data['membership'];
        $customer->ltv = $data['ltv'];
        $customer->last_visit = $data['last_visit'];


        //UPLOAD DE IMAGENS
        if ($request->hasFile('picture') && $request->file('picture')->isValid()) {
            $picture = $request->file('picture');
            $imgName = $picture->hashName();
            $imgResize = Image::make($picture)->resize(300, 300);
            $imgResize->save(public_path("images/customers/" . $imgName), 80);
            $customer->picture = $imgName;
        } else {
            $customer->picture = 'default.jpg';
        }

        $customer->save();

        $array['msg'] = 'Customer added successfully!';

        return response()->json($array);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function showCustomerById($id)
    {
        $array = ['msg' => ''];

        $customer = User::find($id);
        if ($customer) {
            $array['customers'] = $customer;
        } else {
            $array['error'] = "No customer to show with id" . $id;
        }

        return response()->json($array);
    }
    /**
     * Display the specified resource.
     *
     * @param  string  $name
     * @return \Illuminate\Http\Response
     */

    public function showCustomerByName($name)
    {
        $array = ['msg' => ''];

        $customer = User::where('name', 'like', '%' . $name . '%')->get();
        if ($customer) {
            $array['customers'] = $customer;
        } else {
            $array['msg'] = "No customer to show with name" . $name;
        }

        $array['countCustomers'] = $this->countCustomers();


        return response()->json($array);
    }
    /**
     * Display the specified resource.
     *
     * @param  string  $member
     * @return \Illuminate\Http\Response
     */
    public function showCustomerByMembers($member)
    {
        $array = ['error' => ''];

        $customer = User::where('membership', $member)->get();

        $array['customers'] = $customer;
        $array['countCustomers'] = $this->countCustomers();

        return $array;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $array = ["msg" => ''];

        $customer = User::find($id);

        if ($customer) {
            //VALIDANDO
            $rules = [
                "name" => "string|required|max:50",
                "email" => "string|required|unique:users,email," . $customer->id . "|max:100",
                "phone_number" => "max:11|nullable",
                'birthdate' => 'date|nullable',
                "gender" => "string|max:6|nullable",
                "membership" => "string|max:3",
                "ltv" => "numeric|nullable",
                'last_visit' => 'date|nullable',

            ];

            $validator = Validator::make($request->all(), $rules);

            if ($validator->fails()) {
                $array['error'] = $validator->errors()->first();
                return response()->json($array);
            }

            $data = $request->all();

            // //ATUALIZANDO O ITEM
            if ($data['name']) {
                $customer->name = $data['name'];
            }
            if ($data['email']) {
                $customer->email = $data['email'];
            }
            if ($data['phone_number']) {
                $customer->phone_number = $data['phone_number'];
            }
            if ($data['birthdate']) {
                $customer->birthdate = $data['birthdate'];
            }
            if ($data['gender']) {
                $customer->gender = $data['gender'];
            }
            if ($data['membership']) {
                $customer->membership = $data['membership'];
            }
            if ($data['ltv']) {
                $customer->ltv = $data['ltv'];
            }
            if ($data['last_visit']) {
                $customer->last_visit = $data['last_visit'];
            }

            //UPLOAD DE IMAGENS
            if ($request->hasFile('picture') && $request->file('picture')->isValid()) {
                $picture = $request->file('picture');
                $imgName = $picture->hashName();
                $imgResize = Image::make($picture)->resize(300, 300);
                $imgResize->save(public_path("images/customers/" . $imgName), 80);
                $customer->picture = $imgName;
            }

            $customer->save();

            $array['msg'] = 'Customer updated successfully!';
        } else {
            $array['error'] = 'Customer not found!';
        }

        return response()->json($array);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $array = ['msg' => ''];

        $customer = User::find($id);

        if ($customer) {
            $picture = public_path("images/customers/$customer->picture");
            if (File::exists($picture)) {
                File::delete($picture);
                //unlink($image_path);
            }
            $array['msg'] = `$customer->name client successfully deleted!`;
            $customer->delete();
        } else {
            $array['error'] = `Customer $id does not exist!`;
        }

        return response()->json($array);
    }

    public function countCustomers()
    {
        $total = User::count();
        $members = User::where('membership', 'yes')->count();
        $array = ['total' => $total, 'members' => $members];
        return $array;
    }
}
