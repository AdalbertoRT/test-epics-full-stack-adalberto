<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        $array = ['error' => ''];

        $customers = User::simplePaginate(13);

        $array['customers'] = $customers->items();
        $array['countCustomers'] = $this->countCustomers();

        return $array;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $array = ["error" => ""];

        //VALIDANDO
        $rules = [
            "name" => "string|required|max:50",
            "email" => "string|required|unique:users,email|max:100",
            "phone_number" => "string|max:11",
            "gender" => "string|max:6",
            "membership" => "string|max:3",
            "ltv" => "numeric|required",
            
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return $array['error'] = $validator->errors()->first();
        }

        $data = $request->all();
        // $name = $request->input("name");
        // $email = $request->input("email");
        // $phone_number = $request->input("phone_number");
        // $birthdate = $request->input("birthdate");
        // $gender = $request->input("gender");
        // $membership = $request->input("membership");
        // $ltv = $request->input("ltv");
        // $last_visit = $request->input("last_visit");

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
        // if ($request->hasfile("picture") && $request->file('picture')->isValid()) {
        //     $picture = $request->file('picture');
        //     $imgName = $picture->hashName();
        //     $imgResize = Image::make($picture)->resize(300, 300);

        //     // Storage::disk("public")->put(
        //     //     "images/small/" . $imgName,
        //     //     $imgSmall->encode()
        //     // );

        //     // $imgResize->save(public_path("images/customers/" . $imgName), 80);
        //     $customer->picture = $imgName;
        // }else{
        //     $customer->picture = 'default.jpg';
        // }

        try {
            $customer->save();
            $array['msg'] = 'Customer added successfully!';
        } catch (Exception $e) {
            $array['error'] = "Add new customer is failed! Error: " . $e;
        }

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
        $customer = User::find($id);

        if ($customer) {
            $oldFile = public_path("images/customers/$customer->picture");
            if ($oldFile) Storage::delete(public_path("public/customers/{$customer->category}/$customer->img"));
            $array = ['msg' => `$customer->name client successfully deleted!`];
            $customer->delete();
        } else $array = ['msg' => 'Customer does not exist!'];

        return $array;
    }

    public function countCustomers()
    {
        $total = User::count();
        $members = User::where('membership', 'yes')->count();
        $array = ['total' => $total, 'members' => $members];
        return $array;
    }
}
