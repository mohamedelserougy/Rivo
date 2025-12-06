import React, { useState } from "react";
import avatar from "../../assets/react.svg";
import add from "../../assets/react.svg";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const AdminAddProducts = () => {
  const [personName, setPersonName] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="flex flex-col gap-6">
      {/* Page Title */}
      <h2 className="text-xl font-semibold text-gray-900 pb-4">
        Add New Product
      </h2>

      {/* Product Form */}
      <div className="flex flex-col gap-4 sm:w-8/12">
        {/* Product Images */}
        <label className="text-gray-700 font-medium">Product Images</label>
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt="Product"
            className="w-[120px] h-[100px] object-cover rounded"
          />
          <img
            src={add}
            alt="Add"
            className="w-[30px] h-[35px] cursor-pointer"
          />
        </div>

        {/* Product Name */}
        <input
          type="text"
          placeholder="Product Name"
          className="px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-black/70"
        />

        {/* Product Description */}
        <textarea
          rows="4"
          placeholder="Product Description"
          className="px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-black/70"
        />

        {/* Pricing */}
        <input
          type="number"
          placeholder="Price Before Discount"
          className="px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-black/70"
        />
        <input
          type="number"
          placeholder="Product Price"
          className="px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-black/70"
        />

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Brand */}
        <select className="px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-black/70">
          <option value="val">Brand</option>
          <option value="val1">Brand 1</option>
          <option value="val2">Brand 2</option>
          <option value="val3">Brand 3</option>
        </select>

        {/* Available Colors */}
        <div>
          <span className="text-gray-700 font-medium">Available Colors</span>
          <div className="flex items-center gap-2 mt-2">
            <div
              className="w-6 h-6 border rounded"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
            <div
              className="w-6 h-6 border rounded"
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="w-6 h-6 border rounded"
              style={{ backgroundColor: "black" }}
            ></div>
            <img src={add} alt="Add Color" className="w-8 h-9 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="sm:w-8/12 flex justify-end">
        <button className="px-4 py-1 rounded bg-black/90 text-white font-semibold hover:bg-black/70 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminAddProducts;
