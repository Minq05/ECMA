function CartPage() {
  return (
    <div id="layout" className="pb-4">
      <header
        className="flex p-2 bg-inherit shadow-black text-black"
        id="navbar"
      >
        <div className="flex items-center">
          <img
            className="h-10 cursor-pointer"
            src="../img/logo.png"
            alt="Furniro Logo"
          />
        </div>
        <nav>
          <ul className="list-none flex m-0 p-0">
            <li className="mx-6">
              <a className=" hover:text-red-300 text-2xl" href="/">
                Home
              </a>
            </li>
            <li className="mx-6">
              <a className=" hover:text-red-300 text-2xl" href="/pages/detail">
                Shop
              </a>
            </li>
            <li className="mx-6">
              <a className=" hover:text-red-300 text-2xl" href="/pages/cart">
                Cart
              </a>
            </li>
            <li className="mx-6">
              <a className=" hover:text-red-300 text-2xl" href="/pages/checkout">
                CheckOut
              </a>
            </li>
          </ul>
        </nav>
        <div className="mr-2">
          <a href="#" className="mx-3 hover:text-red-300">
            <i className="fas fa-user" />
          </a>
          <a href="#" className="mx-3 hover:text-red-300">
            <i className="fas fa-search" />
          </a>
          <a href="#" className="mx-3 hover:text-red-300">
            <i className="fas fa-heart" />
          </a>
          <a href="#" className="mx-3 hover:text-red-300">
            <i className="fas fa-shopping-cart" />
          </a>
        </div>
      </header>
      <main className="mt-mt60">
        <div>
          <img
            src="../img/banner.png"
            alt
            width="100%"
            className="w-full cursor-pointer"
          />
        </div>
        <div className="container mx-auto">
          {/* Row container */}
          <div className="flex flex-col lg:flex-row gap-6 my-10">
            {/* Cart Table */}
            <div className="bg-white shadow-md rounded-lg p-6 flex-1">
              <table className="w-full text-left text-sm ">
                <thead className="bg-bg1">
                  <tr className="border-b text-gray-600 uppercase ">
                    <th className="py-3 text-center">Product</th>
                    <th className="py-3 text-center">Price</th>
                    <th className="py-3 text-center">Quantity</th>
                    <th className="py-3 text-center">Subtotal</th>
                    <th className="py-3" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 flex items-center space-x-4">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LR1zazj4mMTeP3rKZZtowUiNx7ldzrzSu8chTgeCEdpPlB6Ss7iEu0DDBXi-VxZQxyk1gKRqsoKMKB-OewCbd24WOeaPDDIC0AG-tlhButFRFx-KRSiDYwmx-BSlM1rg5yEE2c4X14~Rkyk6CD1-RXbmdZxTv4YJemuxgC9EMdT28-u2pqNOkuVbQHfzMv~zqRoHl2v9uUkkehnfKCmvb3k-QQx~s7REO0HCLORjI3nsZOvPj21XWa3ZfZzg5Kp566pjhLcv05r45ia9tjoqBofzsqhMSm9bLDAuepuetNPL6RbVovCtnP8RuDqEsV0MWDg0M0g0jsBpFLUDyKR2TA__"
                        alt="Asgaard Sofa"
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <span className="font-medium">Asgaard sofa</span>
                    </td>
                    <td className="py-4 text-gray-600 text-center">
                      25.000.000đ
                    </td>
                    <td className="py-4 text-center">
                      <input
                        type="number"
                        defaultValue={1}
                        min={1}
                        className="w-12 border-gray-300 text-center rounded-md"
                      />
                    </td>
                    <td className="py-4 text-gray-600 text-center">
                      25.000.000đ
                    </td>
                    <td className="py-4 text-center">
                      <button className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Cart Totals */}
            <div className="bg-bg1 shadow-md rounded-lg p-6 w-full lg:w-1/3">
              <h2 className="text-xl font-semibold border-b pb-4">
                Cart Totals
              </h2>
              <div className="flex justify-between items-center py-4 text-gray-600">
                <span>Subtotal</span>
                <span>25.000.000đ</span>
              </div>
              <div className="flex justify-between items-center py-4 text-gray-900 font-bold">
                <span>Total</span>
                <span>25.000.000đ</span>
              </div>
              <button className="w-full btn btn-outline-dark py-3 rounded-md shadow-md focus:ring-4 focus:ring-yellow-300">
                Check Out
              </button>
            </div>
          </div>
        </div>
        <div className="bg-bg1 h-h270">
          <div className="flex justify-center pt-28">
            <div className="mx-3">
              <i className="fa-solid fa-trophy text-7xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">High Quality</h1>
              <h3 className="mt-3 text-gray-500">crafted from top materials</h3>
            </div>
            <div className="mx-3 ">
              <i className="fa-regular fa-circle-check text-7xl ml-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Warranty Protection</h1>
              <h3 className="mt-3 text-gray-500">Over 2 years</h3>
            </div>
            <div className="mx-3">
              <i className="fa-solid fa-ship text-7xl ml-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Free Shipping</h1>
              <h3 className="mt-3 text-gray-500">Order over 150 $</h3>
            </div>
            <div className="mx-3">
              <i className="fa-solid fa-square-phone-flip text-7xl ml-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">24 / 7 Support</h1>
              <h3 className="mt-3 text-gray-500">Dedicated support</h3>
            </div>
          </div>
        </div>
      </main>{" "}
      <hr />
      <footer className="p-12 flex relative pb-5">
        <div className="mr-20">
          <div className="pb-10">
            <img src="../img/logo.png" alt />
          </div>
          <h3 className="text-gray-400">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </h3>
        </div>
        <div className="block mx-16">
          <div>
            <h3 className="font-bold text-gray-500 cursor-pointer">Link</h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Home
            </h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              About
            </h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Contact
            </h3>
          </div>
        </div>
        <div className="mx-16">
          <div>
            <h3 className="font-bold text-gray-500 cursor-pointer">Help</h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Payment Options
            </h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Returns
            </h3>
            <h3 className="font-bold my-3 hover:text-red-400 cursor-pointer">
              Privacy Polices
            </h3>
          </div>
        </div>
        <div className="mx-16">
          <div>
            <h3 className="font-bold text-gray-500 cursor-pointer">
              Newsletter
            </h3>
            <input
              className="btn btn-outline-dark text-left my-3"
              type="search"
              placeholder="Enter Your Email Address"
            />{" "}
            <button className="btn btn-dark">SUBSRICE</button>
          </div>
        </div>
        <div
          className="w-full absolute bottom-8 left-0"
          style={{ border: "1px solid gray", height: 0 }}
        />
        <div className="absolute left-2 font-semibold bottom-0">
          2023 furino. All rights reverved
        </div>
      </footer>
    </div>
  );
}

export default CartPage;
