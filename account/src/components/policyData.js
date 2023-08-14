const policyData = [
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "B1",
    type: "Alphard",
    category: "Passenger",
    domesticExport: "Domestic",
    assignType: "Firm Order",
    holdInvoice: "New Model",
    modelPickupFlag: "DLR Pickup",
    plantCode: "0-import",
    modelPrintSequence: "16058",
    automaticYardInFlag: "Yes",
    evFlag: "No",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "A1",
    type: "Alphard",
    category: "Passenger",
    domesticExport: "Export",
    assignType: "Firm Order",
    holdInvoice: "None",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16057",
    automaticYardInFlag: "No",
    evFlag: "Yes",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "c1",
    type: "Alphard",
    category: "Commercial",
    domesticExport: "Domestic",
    assignType: "Firm Order",
    holdInvoice: "New Model",
    modelPickupFlag: "DLR Pickup",
    plantCode: "",
    modelPrintSequence: "16059",
    automaticYardInFlag: "Yes",
    evFlag: "No",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "G1",
    type: "Alphard",
    category: "Passenger",
    domesticExport: "Domestic",
    assignType: "Non Firm Order",
    holdInvoice: "Recall",
    modelPickupFlag: "DLR Pickup",
    plantCode: "",
    modelPrintSequence: "16274",
    automaticYardInFlag: "Yes",
    evFlag: "Yes",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "B1",
    type: "Velfire",
    category: "Passenger",
    domesticExport: "Domestic",
    assignType: "Non Firm Order",
    holdInvoice: "None",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16062",
    automaticYardInFlag: "Yes",
    evFlag: "No",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "A1",
    type: "Velfire",
    category: "Passenger",
    domesticExport: "Domestic",
    assignType: "Non Firm Order",
    holdInvoice: "Recall",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16061",
    automaticYardInFlag: "No",
    evFlag: "No",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "G1",
    type: "Alphard",
    category: "Commercial",
    domesticExport: "Domestic",
    assignType: "Firm Order",
    holdInvoice: "None",
    modelPickupFlag: "DLR Pickup",
    plantCode: "",
    modelPrintSequence: "16060",
    automaticYardInFlag: "No",
    evFlag: "No",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "C1",
    type: "Alphard",
    category: "Commercial",
    domesticExport: "Export",
    assignType: "Firm Order",
    holdInvoice: "New Model",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16055",
    automaticYardInFlag: "Yes",
    evFlag: "No",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "D1",
    type: "Lexus",
    category: "Commercial",
    domesticExport: "Export",
    assignType: "Firm Order",
    holdInvoice: "New Model",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16056",
    automaticYardInFlag: "Yes",
    evFlag: "No",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "03",
    type: "Lexus",
    category: "Passenger",
    domesticExport: "Export",
    assignType: "Firm Order",
    holdInvoice: "None",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16057",
    automaticYardInFlag: "Yes",
    evFlag: "No",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "02",
    type: "Lexus",
    category: "Passenger",
    domesticExport: "Export",
    assignType: "Non Firm Order",
    holdInvoice: "Recall",
    modelPickupFlag: "DLR Pickup",
    plantCode: "",
    modelPrintSequence: "16052",
    automaticYardInFlag: "Yes",
    evFlag: "Yes",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "01",
    type: "Lexus",
    category: "Commercial",
    domesticExport: "Domestic",
    assignType: "Non Firm Order",
    holdInvoice: "New Modal",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16053",
    automaticYardInFlag: "No",
    evFlag: "Yes",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "01",
    type: "Lexus",
    category: "Commercial",
    domesticExport: "Domestic",
    assignType: "Firm Order",
    holdInvoice: "New Model",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16054",
    automaticYardInFlag: "Yes",
    evFlag: "Yes",
  },
  {
    id: "uuid-" + Math.random() * 10000000,
    model: "AAHH45R-PFXLB",
    sufix: "03",
    type: "Lexus",
    category: "Commercial",
    domesticExport: "Domestic",
    assignType: "Firm Order",
    holdInvoice: "New Model",
    modelPickupFlag: "TTT Pickup",
    plantCode: "",
    modelPrintSequence: "16051",
    automaticYardInFlag: "No",
    evFlag: "Yes",
  },
];
export const filterPolicyData = (modelPrintSequence, address) => {
  return policyData.filter(
    (item) => item.modelPrintSequence.indexOf(modelPrintSequence) != -1
  );
};
