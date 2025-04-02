"use client";
import React, { useEffect, useState } from "react";
import Input from "../ui/input";
import Select from "react-select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const Option = [
  { value: "AMD1", label: "AMD1" },
  { value: "AMD2", label: "AMD2" },
  { value: "AMD3", label: "AMD3" },
  { value: "AMD4", label: "AMD4" },
  { value: "AMD6", label: "AMD6" },
  { value: "AMD10", label: "AMD10" },
  { value: "AMD15", label: "AMD15" },
  { value: "AMD20", label: "AMD20" },
  { value: "RJK1", label: "RJK1" },
  { value: "RJK2", label: "RJK2" },
  { value: "RJK3", label: "RJK3" },
  { value: "RJK0", label: "RJK0" },
  { value: "RJK00", label: "RJK00" },
  { value: "RJK000", label: "RJK000" },
];

export default function Homepage() {
  const [itemCode, setItemCode] = useState(Option[0]);
  const [castingWeight, setCastingWeight] = useState("");
  const [castingRate, setCastingRate] = useState("");
  const [msStickWeight, setMsStickWeight] = useState("");
  const [msStickRate, setMsStickRate] = useState("");
  const [labour, setLabour] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [profit, setProfit] = useState(0);
  const [title, setTitles] = useState("MS Stick");
  const [extraCostPrice, setExtraCostPrice] = useState("");

  useEffect(() => {
    if (itemCode && itemCode.value.startsWith("RJK")) {
      setTitles("MS Nut");
    } else {
      setTitles("MS Stick");
    }
  }, [itemCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const castingCost = (parseFloat(castingWeight) || 0) * (parseFloat(castingRate) || 0);
    const msStickCost = (parseFloat(msStickWeight) || 0) * (parseFloat(msStickRate) || 0);
    const totalCost = castingCost + msStickCost + (parseFloat(labour) || 0) + (parseFloat(extraCostPrice) || 0);
    const profit = (parseFloat(sellPrice) || 0) - totalCost;
    setProfit(profit);
  };

  return (
    <div className="p-3">
      <h1 className="text-5xl font-bold items-center">Labour Calculation</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center p-5 sm:p-0">
          <div className="w-full sm:w-1/2">
            <Label htmlFor="paymentmethod" className="text-lg font-bold">Item Code</Label>
            {typeof window !== "undefined" && (
              <Select
                options={Option}
                value={itemCode}
                onChange={setItemCode}
                isSearchable
                placeholder="Select Item Code"
                className="mt-2 font-bold text-lg"
              />
            )}
          </div>
          <div className="mt-2 w-full sm:w-1/2">
            <Input
              type="number"
              id="castingweight"
              label="Casting Weight"
              value={castingWeight}
              onChange={(e) => setCastingWeight(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 w-full sm:w-1/2">
            <Input
              type="number"
              id="castingrate"
              label="Casting Rate"
              value={castingRate}
              onChange={(e) => setCastingRate(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 w-full sm:w-1/2">
            <Input
              type="number"
              id="msstickweight"
              label={`${title} Weight`}
              value={msStickWeight}
              onChange={(e) => setMsStickWeight(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 w-full sm:w-1/2">
            <Input
              type="number"
              id="msstickrate"
              label={`${title} Rate`}
              value={msStickRate}
              onChange={(e) => setMsStickRate(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 w-full sm:w-1/2">
            <Input
              type="number"
              id="labour"
              label="Labour"
              value={labour}
              onChange={(e) => setLabour(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 w-full sm:w-1/2">
            <Input
              type="number"
              id="extracost"
              label="Extra Expenses"
              value={extraCostPrice}
              onChange={(e) => setExtraCostPrice(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 w-full sm:w-1/2">
            <Input
              type="number"
              id="sellprice"
              label="Sell Price"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 w-full sm:w-1/2">
            <Button className="w-full">Calculate</Button>
          </div>
        </div>
      </form>
      <div className="mt-5 m-20 items-center">
        <Label className="text-lg font-bold">Profit</Label>
        <p className="text-lg font-bold">{profit}</p>
      </div>
    </div>
  );
}
