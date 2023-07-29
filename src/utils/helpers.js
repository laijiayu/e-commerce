export const formatPrice = (number) => {
  return new Intl.NumberFormat("zh-tw", {
    style: "currency",
    currency: "TWD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number)
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === "colors") {
    unique = unique.flat()
  }
  return ["all", ...new Set(unique)]
}
