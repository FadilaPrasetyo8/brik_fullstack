export const DetailProduct = ({ data }) => {
  console.log(data);
  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={data.images}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
            <p class="title-font font-medium text-2xl text-red-600 my-6">
              <span>$</span>
              {data.price}
            </p>
            <p class="leading-relaxed">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
