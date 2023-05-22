import React from "react";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const BoxSizing = () => {
  const [sizing, setSizing] = React.useState<any>("border-box");
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("box-sizing", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [sizing];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (x: any) => {
    setSizing(x);
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
        <select onChange={(e) => setSizing(e.target.value)} name="resizeOptions" id="resizeOptions">
          <option value="border-box">border-box</option>
          <option value="content-box">content-box</option>
        </select>
      </div>
      <Preview styles={{ boxSizing: sizing }}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Preview>{" "}
      <CopyCode
        code={`
        {
          sizing: ${sizing};
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
                <button onClick={() => handleSwitchProfile(profiles[value][0])} type="button">
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
