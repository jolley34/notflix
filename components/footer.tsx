import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground p-16 w-full bottom-0 border-t-2 border-zinc-800">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <h1>Notflix ™</h1>
            <h1 className="font-thin text-xs ">1997-2024</h1>
          </div>
          <ul className="flex gap-4 align-middle">
            <li>
              <InstagramIcon />
            </li>
            <li>
              <XIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-thin">Designed in Sweden</h1>
        </div>
      </div>
    </footer>
  );
}
