function DetailPage() {
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
        <div className="bg-yellow-200 h-28 p-11 flex font-sans">
          <h1 className="font-bold text-2xl cursor-pointer hover:text-red-300 flex">
            Home
          </h1>
          <h1 className="font-bold text-2xl cursor-pointer  flex ml-7">&gt;</h1>
          <h1 className="font-bold text-2xl cursor-pointer hover:text-red-300 flex ml-7">
            Shop
          </h1>
          <h1 className="font-bold text-2xl cursor-pointer  flex ml-7">&gt;</h1>
          <h1 className="font-bold text-2xl cursor-pointer  flex ml-7">|</h1>
          <h1 className="font-bold text-2xl cursor-pointer hover:text-red-300 flex ml-7">
            Asgaard sofa
          </h1>
        </div>
        <div className="p-12 flex">
          <div className="block">
            <div className="w-24 h-24 bg-yellow-100 justify-center rounded-lg cursor-pointer">
              <img
                src="https://th.bing.com/th/id/R.40d933a3facdccb8499d4fff48026ef5?rik=z3Zai9ocERmU4w&pid=ImgRaw&r=0"
                alt
                className="pt-2 pr-1"
              />
            </div>
            <div className="w-24 h-24 bg-yellow-100 justify-center rounded-lg my-3 cursor-pointer">
              <img
                src="https://th.bing.com/th/id/R.40d933a3facdccb8499d4fff48026ef5?rik=z3Zai9ocERmU4w&pid=ImgRaw&r=0"
                alt
                className="pt-2 pr-1"
              />
            </div>
            <div className="w-24 h-24 bg-yellow-100 justify-center rounded-lg my-3 cursor-pointer">
              <img
                src="https://th.bing.com/th/id/R.40d933a3facdccb8499d4fff48026ef5?rik=z3Zai9ocERmU4w&pid=ImgRaw&r=0"
                alt
                className="pt-2 pr-1"
              />
            </div>
            <div className="w-24 h-24 bg-yellow-100 justify-center rounded-lg my-3 cursor-pointer">
              <img
                src="https://th.bing.com/th/id/R.40d933a3facdccb8499d4fff48026ef5?rik=z3Zai9ocERmU4w&pid=ImgRaw&r=0"
                className="pt-3 pr-1"
              />
            </div>
          </div>
          <div className="block ml-5">
            <div className="bg-yellow-100 h-h500 w-w425 rounded-lg flex cursor-pointer">
              <img
                src="https://th.bing.com/th/id/R.40d933a3facdccb8499d4fff48026ef5?rik=z3Zai9ocERmU4w&pid=ImgRaw&r=0"
                alt
              />
            </div>
          </div>
          <div className="block w-w607 h-h730 ml-10 pl-12 relative">
            <div>
              <h1 className="font-bold text-3xl cursor-pointer hover:text-red-300 font-sans">
                Asgaard sofa
              </h1>
              <h2 className="cursor-pointer mt-2 text-xl font-semibold text-gray-400">
                25.000.000 đ
              </h2>
              <div className="flex my-3">
                <i
                  className="fas fa-star"
                  style={{ color: "darkorange", fontSize: 24 }}
                />
                <i
                  className="fas fa-star"
                  style={{ color: "darkorange", fontSize: 24 }}
                />
                <i
                  className="fas fa-star"
                  style={{ color: "darkorange", fontSize: 24 }}
                />
                <i
                  className="fas fa-star"
                  style={{ color: "darkorange", fontSize: 24 }}
                />
                <i
                  className="fas fa-star-half"
                  style={{ color: "darkorange", fontSize: 24 }}
                />
                <i
                  className="fas fa-grip-lines-vertical"
                  style={{ fontSize: 24, color: "#000" }}
                />
                <h3 className="ml-5 text-gray-400 font-sans">
                  5 Customer Review
                </h3>
              </div>
              <div className="w-w424 font-sans my-3">
                <h2>
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                </h2>
              </div>
              <div className="my-3">
                <h1 className="font-sans text-xl text-gray-500 mb-2">Size</h1>
                <div className="flex space-x-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="size"
                      defaultValue="L"
                      className="hidden"
                    />
                    <span
                      className="px-4 py-2 bg-gray-200 text-black rounded cursor-pointer hover:bg-blue-300"
                      onclick="selectOption(this)"
                    >
                      L
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="size"
                      defaultValue="XL"
                      className="hidden"
                    />
                    <span
                      className="px-4 py-2 bg-gray-200 text-black rounded cursor-pointer hover:bg-blue-300"
                      onclick="selectOption(this)"
                    >
                      XL
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="size"
                      defaultValue="XS"
                      className="hidden"
                    />
                    <span
                      className="px-4 py-2 bg-gray-200 text-black rounded cursor-pointer hover:bg-blue-300"
                      onclick="selectOption(this)"
                    >
                      XS
                    </span>
                  </label>
                </div>
              </div>
              <div className="my-3">
                <h1 className="font-sans text-xl text-gray-500 mb-2">Color</h1>
                <button className="btn btn-danger bg-violet-600 w-8 h-8 rounded-lg50" />
                <button className="btn btn-success bg-violet-600 w-8 h-8 rounded-lg50" />
                <button className="btn btn-dark bg-violet-600 w-8 h-8 rounded-lg50" />
              </div>
              <div className="flex">
                <div className="flex items-center border border-black rounded-md p-2 space-x-4 w-32 justify-center">
                  <button
                    onclick="decrease()"
                    className="text-xl font-bold px-2"
                  >
                    -
                  </button>
                  <span id="number" className="text-xl">
                    1
                  </span>
                  <button
                    onclick="increase()"
                    className="text-xl font-bold px-2"
                  >
                    +
                  </button>
                </div>
                <button className="btn btn-outline-dark mx-3 w-40">
                  Add to cart
                </button>
                <button className="btn btn-outline-dark w-36">+ Compare</button>{" "}
              </div>
              <div
                className="w-w533 absolute bottom-52 left-0 ml-12"
                style={{ border: "1px solid rgb(175, 168, 168)", height: 0 }}
              />
              <div className="absolute bottom-12">
                <table>
                  <tbody>
                    <tr className="font-semibold font-sans text-gray-400">
                      <td>SKU</td>
                      <td className="pl-2">:</td>
                      <td className="pl-2">SS001</td>
                    </tr>
                    <tr className="font-semibold font-sans text-gray-400">
                      <td>Category</td>
                      <td className="pl-2">:</td>
                      <td className="pl-2">Sofas</td>
                    </tr>
                    <tr className="font-semibold font-sans text-gray-400">
                      <td>Tags</td>
                      <td className="pl-2">:</td>
                      <td className="pl-2">Sofa, Chair, Home, Shop</td>
                    </tr>
                    <tr className="font-semibold font-sans text-gray-400">
                      <td>Share</td>
                      <td className="pl-2">:</td>
                      <td className="pl-2">
                        <i className="fa-brands fa-facebook" />
                        <i className="fa-brands fa-instagram mx-2" />
                        <i className="fa-brands fa-twitter" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="p-12">
          <div className="flex justify-center my-4 font-sans">
            <h1 className="text-gray-500 text-4xl cursor-pointer hover:text-black">
              Description
            </h1>
            <h1 className="mx-5 text-4xl cursor-pointer text-gray-500 hover:text-black">
              Additional Information
            </h1>
            <h1 className="text-4xl cursor-pointer text-gray-500 hover:text-black">
              Reviews [5]
            </h1>
          </div>
          <div
            className="text-gray-500 font-sans mx-32 text-justify"
            style={{ width: 1100 }}
          >
            <h3 className="my-3 ">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </h3>
            <h3>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </h3>
          </div>
          <div className="flex justify-center my-5">
            <div className="w-w640 h-96">
              <img
                src="https://images.unsplash.com/photo-1727976823180-314b097d2572?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full cursor-pointer"
              />
            </div>
            <div className="w-w640 h-96 ml-10">
              <img
                src="https://images.unsplash.com/photo-1731000549553-d79116144be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="p-12">
          <div className="flex w-full justify-center my-4 font-sans hover:text-red-400">
            <h1 className="text-5xl font-bold cursor-pointer">
              Related Products
            </h1>
          </div>
          <div className="grid grid-cols-4 my-4">
            <div className="mx-3" id="big">
              <div className>
                <img
                  src="https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2tJ1346Rszcq6OCMrbX2i1eqjweMa1Y2y3x3CdL5Af8hrOrofIH0TmZV2ua0h4~nnJXjnsqebpI7ckTq1BZpBtoXmqG9vno0GHOZHW6uuNPe01UY97gRUniFdL5CFuJVUMNKeZch0TLP9ph6uYgHIYZHvwcu6HTMMZq6UDpyCli5ZsQTHHDqLdVFu8vapUMTNUEEDs10i0QCxN15yHwMlUwCrQl9yn5LGzriuY3lczKj3bQGloeQ2LsWt~G4mmsqlO-slCA6HDY0auA1eU1IzKNww67Ng-i4tU867tkcnfBIAgKiMOS3azTqwNp4DeKtnEu-75i0T2IpVPpWktBxQ__"
                  className="w-full h-96"
                  alt
                />
              </div>
              <div className="bg-gray-200 pb-2 cursor-pointer" id="mini">
                <h1 className="block pl-5 mb-2 pt-2 font-bold text-4xl cursor-pointer">
                  <a className=" hover:text-red-300" href="#">
                    Syltherine
                  </a>
                </h1>
                <span className="block ml-5 mb-2 mr-36 text-gray-500 text-lg cursor-pointer">
                  Stylish cafe chair
                </span>
                <del className="ml-5 text-gray-400 cursor-pointer">
                  3.500.000đ
                </del>
              </div>
              <div className="grid justify-center" id="mini2">
                <button className="d-flex flex-row btn btn-danger h-10 justify-center mt-24 mb-mm">
                  Add to cart
                </button>
                <div className>
                  <a href="#" className="cursor-pointer hover:text-red-300">
                    <i className="fas fa-share" /> Share
                  </a>
                  <a href="#" className="cursor-pointer hover:text-red-300">
                    <i className="fas fa-heart" /> Like
                  </a>
                </div>
              </div>
            </div>
            <div className=" mx-3" id="big">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MrKnB6sfqe1O4cM-xIEckBriZkclS2bMTi10H-Dk~Flw5-wwr1wHJvE9Xv2soyyIWMCwwiKIWRxrarMeC-8NUD4OInGPCd64kg~UYOOdmB-PrF9CfbuUWh~4-RRqx-UH0fOEZaBvAgYYNk7-QToLBmSRSKNZkJPEE2mF08ho01WZ4yP~2cG42XnFoCnSvrIbfFAeafTF~qiCvSVE7a8QhRGEey9QiTmzf-Zhnza5yBz2lcbZTvmGBzrSd5dhRRojC~ePiT0iLg3H0bPlf0dtP0Nwep2tzgpgMxfb4CympNtb2vgea5KFkVbhXR6HSk0UVuhJevgGBOrsJ5tWJPkGig__"
                  className="w-full h-96"
                  alt
                />
              </div>
              <div className="w-full bg-gray-200 pb-2" id="mini">
                <h1 className="pl-5 pt-2 mb-2 font-bold text-4xl cursor-pointer">
                  <a className=" hover:text-red-300" href="#">
                    Leviosa
                  </a>
                </h1>
                <span className="block ml-5 mb-2 mr-36 text-gray-500 text-lg cursor-pointer">
                  Stylish cafe chair
                </span>
                <del className=" ml-5 text-gray-400 cursor-pointer">
                  2.500.000đ
                </del>
              </div>
              <div className="grid justify-center" id="mini2">
                <button className="d-flex flex-row btn btn-danger h-10 justify-center mt-24 mb-mm">
                  Add to cart
                </button>
                <div className>
                  <a href="#" className="cursor-pointer hover:text-red-300">
                    <i className="fas fa-share" /> Share
                  </a>
                  <a href="#" className="cursor-pointer hover:text-red-300">
                    <i className="fas fa-heart" /> Like
                  </a>
                </div>
              </div>
            </div>
            <div className=" mx-3" id="big">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1s1d0xiuGZ4C5lkJ0B4ZmHXY8AkHPhFnYrpf5k22389NVcU3bCDDy8KcaROOcPUSdVradoZ9Sae8tO8BD3tqFHrz-tklW3pt0DhCHBkJe-rQAHnSOSR17lUd4WB~zBU1wQzTNzBoQLAx~jJefl6d4TL2Uitw63d2PUtT-JzrXJQm08nMgwEQwBTzKD5IeQYm6vitd6T59zuJ8QBBSxu6L7rncojzYfh-8ClWXYtBUN2wcuAxyRuvur0xbkyhs4u4gL0S7aQH1FU2hC4xmveHWozrSHg5XvKhw91iCGiDMzYALwcgsJbJNMx66oXq2G-62Flh3SkAmemNFxz446P3g__"
                  className="w-full h-96"
                  alt
                />
              </div>
              <div className="bg-gray-200 pb-2" id="mini">
                <h1 className="clear-right mb-2 pl-5 pt-2 font-bold text-4xl cursor-pointer">
                  <a className=" hover:text-red-300" href="#">
                    Lolito
                  </a>
                </h1>
                <h2 className="block float-left ml-5 mb-2 mr-36 text-gray-500 text-lg cursor-pointer">
                  Luxury big sofa
                </h2>
                <h3 className="ml-5 text-gray-400 cursor-pointer">
                  14.000.000đ
                </h3>
              </div>
              <div className="grid justify-center" id="mini2">
                <button className="d-flex flex-row btn btn-danger h-10 justify-center mt-24 mb-mm">
                  Add to cart
                </button>
                <div className>
                  <a href="#" className="cursor-pointer hover:text-red-300">
                    <i className="fas fa-share" /> Share
                  </a>
                  <a href="#" className="cursor-pointer hover:text-red-300">
                    <i className="fas fa-heart" /> Like
                  </a>
                </div>
              </div>
            </div>
            <div className=" mx-3" id="big">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KIyOWfbkbJJVzTStlA1zOG-7M3KJsPaYpQQ6JiIzBiU1dke2-NUfQk0K7ovV6vY60~mJoIWkaMW1sfImgKBgG8wcXLa2jVQPoBZNgNYtLfPAeW0n7juEQDtKXJQPJ1LkmywVBRuzy0YVgq0aMDkVzTLrsTL3-QRTt92Db~2NMm72H8pJ389hz~aovJWuBfGdLA9N2WKw9QERDtYGc6gyqo4di0V475XoHDGsZHfa71ieA4I9Qeb0WwxkzI~wc5PSPbjoHz~XWRUp8AhBTVkXGQxOr95FfxFfUYq7OJwxVatSxgNtKJCK~WV6eCeGPvuQVpKe88B-tfswdIzpgp6Mmg__"
                  className="w-full h-96"
                  alt
                />
              </div>
              <div className="bg-gray-200 pb-2" id="mini">
                <h1 className="pl-5 pt-2 mb-2 font-bold text-4xl ">
                  <a className=" hover:text-red-300" href="#">
                    Respira
                  </a>
                </h1>
                <span className="block ml-5 mb-2 mr-36 text-gray-500 text-lg cursor-pointer">
                  Outdoor bar table
                </span>
                <del className="ml-5 text-gray-400 cursor-pointer">
                  5.000.000đ
                </del>
              </div>
              <div className="grid justify-center" id="mini2">
                <button className="d-flex flex-row btn btn-danger h-10 justify-center mt-24 mb-mm">
                  Add to cart
                </button>
                <div className>
                  <a href="#" className="cursor-pointer hover:text-red-300">
                    <i className="fas fa-share" /> Share
                  </a>
                  <a href="#" className="cursor-pointer hover:text-red-300">
                    <i className="fas fa-heart" /> Like
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-outline-warning">Show More</button>
          </div>
        </div>
        <hr />
      </main>
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

export default DetailPage;
