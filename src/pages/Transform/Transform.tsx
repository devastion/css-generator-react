import React from "react";
import { Input } from "components/Input";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const Transform = () => {
  const [scale, setScale] = React.useState<number | string>(1);
  const [rotate, setRotate] = React.useState<number | string>(0);
  const [translateX, setTranslateX] = React.useState<number | string>(0);
  const [translateY, setTranslateY] = React.useState<number | string>(0);
  const [skewX, setSkewX] = React.useState<number | string>(0);
  const [skewY, setSkewY] = React.useState<number | string>(0);
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("transform", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [scale, rotate, translateX, translateY, skewX, skewY];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (a: number, b: number, c: number, d: number, e: number, f: number) => {
    setScale(a);
    setRotate(b);
    setTranslateX(c);
    setTranslateY(d);
    setSkewX(e);
    setSkewY(f);
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
        <Input val={scale} name="scale" type="number" onChangeHandler={(e) => setScale(e.target.value)} />
        <Input val={rotate} name="rotate" type="number" onChangeHandler={(e) => setRotate(e.target.value)} />
        <Input val={translateX} name="translateX" type="number" onChangeHandler={(e) => setTranslateX(e.target.value)} />
        <Input val={translateY} name="translateY" type="number" onChangeHandler={(e) => setTranslateY(e.target.value)} />
        <Input val={skewX} name="skewX" type="number" onChangeHandler={(e) => setSkewX(e.target.value)} />
        <Input val={skewY} name="skewY" type="number" onChangeHandler={(e) => setSkewY(e.target.value)} />
      </div>
      <Preview
        styles={{
          transform: `scale(${scale}) rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px) skewX(${skewX}deg) skewY(${skewY}deg)`,
        }}
      />
      <CopyCode
        code={`transform: scale(${scale}) rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px) skewX(${skewX}deg) skewY(${skewY}deg)`}
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
                <button
                  onClick={() =>
                    handleSwitchProfile(profiles[value][0], profiles[value][1], profiles[value][2], profiles[value][3], profiles[value][4], profiles[value][5])
                  }
                  type="button">
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
