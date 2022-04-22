<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use File;
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
            "phone_number" => "max:11",
            "gender" => "string|max:6",
            "membership" => "string|max:3",
            "ltv" => "numeric|required",

        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            $array['error'] = $validator->errors()->first();
            return response()->json($array);
        }

        //$data = $request->all();
        $name = $request->input("name");
        $email = $request->input("email");
        $phone_number = $request->input("phone_number");
        $birthdate = $request->input("birthdate");
        $gender = $request->input("gender");
        $membership = $request->input("membership");
        $ltv = $request->input("ltv");
        $last_visit = $request->input("last_visit");

        //CRIANDO O REGISTRO
        $customer = new User();
        $customer->name = $name;
        $customer->email = $email;
        //$customer->picture = $picture;
        $customer->phone_number = $phone_number;
        $customer->birthdate = $birthdate;
        $customer->gender = $gender;
        $customer->membership = $membership;
        $customer->ltv = $ltv;
        $customer->last_visit = $last_visit;


        //UPLOAD DE IMAGENS
        if ($request->hasFile('picture') && $request->file('picture')->isValid()) {
            $picture = $request->file('picture');
            $imgName = $picture->hashName();
            $imgResize = Image::make($picture)->resize(300, 300);

            // Storage::disk("public")->put(
            //     "images/small/" . $imgName,
            //     $imgSmall->encode()
            // );

            $imgResize->save(public_path("images/customers/" . $imgName), 80);
            $customer->picture = $imgName;
        } else {
            $customer->picture = 'default.jpg';
        }

        $customer->save();
        $last_record = User::latest()->first();
        $array['msg'] = 'Customer added successfully!';

        return $array;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showCustomerById($id)
    {
        $array = ['error' => ''];

        $customer = User::where('id', $id)->get();

        $array['customer'] = $customer;
        $array['countCustomers'] = $this->countCustomers();

        return $array;

        // $array = ["error" => ""];

        // $product = Products::find($id);

        // if ($product) {
        //     $array["product"] = $product;
        // } else {
        //     $array["error"] = "O produto " . $id . " não existe!";
        // }

        // return response()->json($array);
    }

    public function showCustomerByName($name)
    {
        $array = ['error' => ''];

        $customer = User::where('name', 'like', '%' . $name . '%')->get();
        $array['customers'] = $customer;
        $array['countCustomers'] = $this->countCustomers();

        return $array;
    }

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
        // $array = ["error" => "", "page" => "PRODUTO"];

        // //VALIDANDO
        // $rules = [
        //     "name" => "String",
        //     "description" => "String",
        //     "quantity" => "Integer|min:0",
        //     "images" => "array|nullable",
        //     "images.*" => "image|mimes:jpeg,png,jpg,gif,svg",
        // ];

        // $validator = Validator::make($request->all(), $rules);

        // if ($validator->fails()) {
        //     return redirect()
        //         ->route("product.show", ["id" => $id])
        //         ->with("error", $validator->errors()->first());
        // }

        // $name = $request->input("name");
        // $description = $request->input("description");
        // $price = $request->input("price");
        // $quantity = $request->input("quantity");

        // //ATUALIZANDO O ITEM
        // $product = Products::find($id);

        // if ($product) {
        //     if ($name) {
        //         $product->name = $name;
        //     }
        //     if ($description) {
        //         $product->description = $description;
        //     }
        //     if ($price) {
        //         $product->price = $price;
        //     }
        //     if ($quantity) {
        //         $product->quantity = $quantity;
        //     }

        //     $product->save();

        //     //UPLOAD DE IMAGENS
        //     if ($request->hasfile("images")) {
        //         // && $request->file('images')->isValid()){
        //         $image = new ProductsImages();
        //         $imgExtensions = ["jpg", "jpeg", "png", "gif"];
        //         foreach ($request["images"] as $key => $file) {
        //             if (
        //                 in_array(
        //                     $file->getClientOriginalExtension(),
        //                     $imgExtensions
        //                 )
        //             ) {
        //                 $imgName = $file->hashName();
        //                 $imgSmall = Image::make($file)->resize(300, 300);
        //                 $imgBig = Image::make($file)->resize(800, 800);
        //                 Storage::disk("public")->put(
        //                     "images/small/" . $imgName,
        //                     $imgSmall->encode()
        //                 );
        //                 Storage::disk("public")->put(
        //                     "images/big/" . $imgName,
        //                     $imgBig->encode()
        //                 );
        //                 // $imgBig->save(public_path("img/products/big"), $imgName);
        //                 $image->url = $imgName;
        //                 $image->product_id = $product->id;
        //                 $prodImg = $product->products_images
        //                     ->where("cover", 1)
        //                     ->first();
        //                 if ($prodImg == null) {
        //                     $image->cover = 1;
        //                 }
        //                 $image->save();
        //             }
        //         }
        //     }
        //     return redirect()
        //         ->route("product.show", ["id" => $id])
        //         ->with("msg", "Produto Atualizado com Sucesso!");
        // } else {
        //     return redirect()
        //         ->route("product.show", ["id" => $id])
        //         ->with("error", "Ocorreu um ERRO ao atualizar este produto.");
        // }
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
            if ($picture) unlink(public_path("images/customers/$customer->img"));
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
