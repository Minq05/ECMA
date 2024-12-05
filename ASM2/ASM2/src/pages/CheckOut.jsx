function CheckOutPage() {
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
              <a
                className=" hover:text-red-300 text-2xl"
                href="/pages/checkout"
              >
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
        <div className="container mx-auto my-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Billing Details */}
            <div className="bg-white rounded-lg p-6 flex-1">
              <h2 className="text-4xl font-bold pb-4">Billing Details</h2>
              <form className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1 ">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-600"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full border border-gray-300 rounded-md h-14 p-2 "
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full border border-gray-300 rounded-md h-14 p-2 "
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    className="w-full border border-gray-300 rounded-md h-14 p-2 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Country / Region
                  </label>
                  <select
                    id="country"
                    className="w-full border border-gray-300 rounded-md h-14 p-2 "
                  >
                    <option>Sri Lanka</option>
                    <option>Vietnam</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="street-address"
                    className="w-full border border-gray-300 rounded-md h-14 p-2 "
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Town / City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full border border-gray-300 rounded-md p-2 h-14 "
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="province"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Province
                    </label>
                    <select
                      id="province"
                      className="w-full border border-gray-300 rounded-md p-2 h-14 "
                    >
                      <option>Western Province</option>
                      <option>Central Province</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="zip-code"
                      className="block text-sm font-medium text-gray-600"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip-code"
                      className="w-full border border-gray-300 h-14 rounded-md p-2 "
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="w-full border h-14 border-gray-300 rounded-md p-2 "
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border h-14 border-gray-300 rounded-md p-2 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="additional-info"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="additional-info"
                    rows={4}
                    className="w-full border h-14 border-gray-300 rounded-md p-2 "
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 w-full lg:w-1/3 h-96">
              <h2 className="text-2xl font-bold">Product</h2>
              <div className="flex justify-between items-center py-2 text-gray-600">
                <p>Asgaard sofa x 1</p>
                <p className="text-right text-gray-600">25.000.000đ</p>
              </div>
              <div className="flex justify-between items-center py-2 text-gray-600">
                <span>Subtotal</span>
                <span>25.000.000đ</span>
              </div>
              <div className="flex justify-between border-b items-center py-4 text-gray-900 font-bold">
                <span>Total</span>
                <span>250.000.000đ</span>
              </div>
              <div className="py-2">
                <label className="block">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-2 focus:ring-yellow-400"
                    defaultChecked
                  />{" "}
                  Direct Bank Transfer
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className="py-2 ">
                <label className="block">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-2 focus:ring-yellow-400"
                  />{" "}
                  Cash on Delivery
                </label>
              </div>
              <p className="text-sm text-gray-500">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" className="text-yellow-500 hover:underline">
                  privacy policy
                </a>
                .
              </p>
              <button className="w-full mt-4 py-3 rounded-md shadow-md btn btn-outline-dark">
                Place Order
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

export default CheckOutPage;
