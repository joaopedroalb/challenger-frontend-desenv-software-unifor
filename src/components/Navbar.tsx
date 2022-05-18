const PICTURE_DEFAULT =
  "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg";
const PERSON_IMG_DEFAULT =
  "http://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png";

export default function Navbar() {
  return (
    <div className="w-full bg-white flex justify-between p-6">
      <div className="flex items-center gap-2">
        <img
          className="object-scale-down h-10 rounded-sm"
          src={PICTURE_DEFAULT}
          alt="Blank Image"
        />
        <h1 className="font-bold text-2xl">Company</h1>
      </div>

      <img
        className="object-scale-down h-10 rounded-full"
        src={PERSON_IMG_DEFAULT}
        alt="Person image blank"
      />
    </div>
  );
}
