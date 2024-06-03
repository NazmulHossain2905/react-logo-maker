import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import LucideIcon from "./LucideIcon";
import { lucideIconLists } from "../data/lucideIconLists";
import { useLogoContext } from "../context/LogoContext";

const IconListModal = ({
  isOpen = false,
  setIsOpen = () => {},
  disableOverlayClick = false,
}) => {
  const { setIconStyle } = useLogoContext();
  const initialIcon = 400;

  const [icons, setIcons] = useState(lucideIconLists.slice(0, initialIcon));
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSearch = (search = "") => {
    setSearchTerm(search);

    const searchedIcons = lucideIconLists.filter((iconName) => {
      return iconName
        .toLowerCase()
        .includes(search.split(" ").join("").toLowerCase());
    });

    setIcons(searchedIcons);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setIcons(lucideIconLists.slice(0, initialIcon));
    setSearchTerm("");
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIcons((prevIcons) => [
          ...prevIcons,
          ...lucideIconLists.slice(initialIcon, -1),
        ]);
      }, 1500);
    }
  }, [isOpen]);

  return isOpen ? (
    <div className={`fixed inset-0 z-[1001] flex items-start justify-center`}>
      <div
        onClick={() => !disableOverlayClick && handleModalClose()}
        className="fixed inset-0 z-10 bg-black bg-opacity-40"
      />

      <div className="z-50 mt-20 flex max-h-[80dvh] w-[90%] max-w-[45rem] flex-col gap-4 rounded-xl bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">
            Choose an icon of{" "}
            <span className="italic underline">{lucideIconLists.length}</span>{" "}
            icons
          </h2>

          <div className="flex items-center gap-1 rounded-sm border px-2 py-1">
            <input
              type="text"
              placeholder="Search any icon..."
              className="outline-none"
              onChange={(e) => handleOnSearch(e.target.value)}
            />

            <Search className="size-5 text-gray-600" />
          </div>

          <X
            onClick={() => handleModalClose()}
            className="cursor-pointer transition hover:rotate-180"
          />
        </div>

        {icons?.length ? (
          <div className="grid grid-cols-5 gap-3 overflow-auto rounded-lg bg-slate-100 p-3 md:grid-cols-7 lg:grid-cols-10">
            {icons?.map((icon, index) => (
              <div
                key={index}
                className="flex h-12 cursor-pointer items-center justify-center rounded-md bg-slate-200 transition hover:scale-110 hover:bg-slate-300"
                onClick={() => {
                  setIconStyle((prev) => ({ ...prev, iconName: icon }));
                  handleModalClose();
                }}
                title={icon}
              >
                <LucideIcon name={icon} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-600">
            Icon not found of search{" "}
            <span className="font-medium">"{searchTerm}"</span>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default IconListModal;
