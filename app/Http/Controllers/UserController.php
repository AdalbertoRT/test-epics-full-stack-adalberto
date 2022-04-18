<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function countCustomers()
    {
        $total = User::count();
        $members = User::where('membership', 'yes')->count();
        $array = ['total' => $total, 'members' => $members];
        return $array;
    }
}
