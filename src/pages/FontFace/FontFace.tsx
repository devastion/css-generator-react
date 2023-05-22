import React from "react";
import { Input } from "components/Input";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const FontFace = () => {
  const [fontFamily, setFontFamily] = React.useState<string>("");
  const [src, setSrc] = React.useState<number | string>("");
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("font-face", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [fontFamily, src];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (x: string, y: string) => {
    setFontFamily(x);
    setSrc(y);
  };

  const handleRemoveProfile = (profile: string) => {
    const temp = profiles;
    delete temp[profile];
    setProfiles(temp);
  };

  return (
    <div className="p-4">
      <h2 className="py-4">Inputs:</h2>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <Input val={fontFamily} name="Font Family" type="text" onChangeHandler={(e) => setFontFamily(e.target.value)} />
        <Input val={src} name="source" type="text" onChangeHandler={(e) => setSrc(e.target.value)} />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        @font-face {
            font-family: ${fontFamily};
            src: ${src};
        }
      `,
        }}></div>
      <Preview styles={{ fontFamily: fontFamily }} />
      <CopyCode
        code={`
        @font-face {
            font-family: ${fontFamily};
            src: ${src};
        }
      `}
      />
      <div className="mt-5">
        <div className="flex w-[150px] flex-col">
          <input type="text" className="border p-1" placeholder="Name" onChange={(e) => setNewProfileName(e.target.value)} />
          <button onClick={handleSaveProfile} type="button" className="cursor-pointer">
            Save
          </button>
        </div>
        <div className="mt-5 flex flex-row gap-5">
          {Object.keys(profiles).map((value, index) => {
            return (
              <div key={index} className="flex flex-col">
                <button onClick={() => handleSwitchProfile(profiles[value][0], profiles[value][1])} type="button">
                  {value}
                </button>
                <button type="button" onClick={() => handleRemoveProfile(value)}>
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
