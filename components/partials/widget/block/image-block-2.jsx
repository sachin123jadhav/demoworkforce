import Greetings from "../Greetings";

const ImageBlock2 = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
      style={{
        backgroundImage: `url(/assets/images/all-img/widget-bg-2.png)`,
      }}
    >
      <div>
        <h4 className="text-xl font-medium text-white mb-2">
          <span className="block font-normal text-lg"> <Greetings/> </span>
          <span className="block">Mr. Parmeshwar</span>
        </h4>
        <p className="text-sm text-white font-normal">Welcome to Workforce</p>
      </div>
    </div>
  );
};

export default ImageBlock2;
