import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl font-semibold mb-6 text-center text-rose-700">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl text-rose-500 mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio mollitia nihil, blanditiis explicabo illo ipsum
              corrupti aliquam voluptas cumque odit at, quisquam deserunt dolore
              reprehenderit id soluta aut magni consequuntur rem debitis
              doloremque accusamus repellendus dignissimos! Repellendus aperiam
              ab est obcaecati? Quisquam quam veritatis accusantium deleniti.
              Illum quibusdam facilis quaerat veniam suscipit earum hic error
              autem praesentium qui voluptatum ducimus animi sunt ut labore
              incidunt perspiciatis totam beatae voluptas, nisi iusto. Ducimus
              sapiente reprehenderit repudiandae corporis minus amet expedita
              quis ea quam saepe ullam cumque at ab cupiditate, praesentium
              blanditiis sunt repellat non deserunt qui quod. Quisquam error
              dignissimos dicta?
            </p>
            <p className="text-lg leading-relaxed mt-4">
              In hac habitasse platea dictumst. Integer sit amet eros at sem
              eleifend mattis. Vestibulum vel neque aliquam, viverra nunc ac,
              finibus velit.Illum quibusdam facilis quaerat veniam suscipit
              earum hic error autem praesentium qui voluptatum ducimus animi
              sunt ut labore incidunt perspiciatis totam beatae voluptas, nisi
              iusto.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-rose-500 mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to provide the best online shopping experience for
              our customers by offering high-quality products, excellent
              customer service, and a seamless shopping journey. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Fugit vel cupiditate
              molestiae, veniam optio est cumque magnam rem totam. Labore, iste
              sequi. Voluptatibus et, officia hic commodi, dicta nulla quisquam
              voluptas illum quam quo accusamus voluptates itaque assumenda
              saepe nam ratione aliquid vero doloribus deleniti reiciendis totam
              cum consequatur tempore.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We are committed to continuously improving our platform and
              expanding our product range to meet the evolving needs of our
              customers. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sint ullam nobis cumque placeat accusamus sapiente,
              laudantium mollitia repellendus ex. Praesentium, atque? Eveniet
              facere voluptate provident temporibus placeat, molestias aliquam
              sunt doloribus nemo magnam, aut tenetur alias ipsam itaque ea
              rerum iste modi. Qui magnam, veritatis quasi totam eius
              consequuntur laboriosam?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
