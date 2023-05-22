import React from "react";
import { Input } from "components/Input";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const MultipleColumns = () => {
  const [columnCount, setColumnCount] = React.useState<number | string>(0);
  const [gap, setGap] = React.useState<number | string>(0);
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("multiple-column", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [columnCount, gap];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (x: number, y: number) => {
    setColumnCount(x);
    setGap(y);
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
        <Input val={columnCount} name="Column Count" type="number" onChangeHandler={(e) => setColumnCount(e.target.value)} />
        <Input val={gap} name="Column Gap" type="number" onChangeHandler={(e) => setGap(e.target.value)} />
      </div>

      <Preview>
        <p style={{ columnCount: columnCount, columnGap: gap }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Preview>
      <CopyCode
        code={`
        {
          column-count: ${columnCount};
          column-gap: ${gap}
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
