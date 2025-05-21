<template>
  <table
    class="w-[90%] table-fixed my-4  text-left text-[10px] sm:text-[14px]  border-2 border-gray-200 border-collapse"
  >
    <thead>
      <tr class="bg-gray-100">
        <th
          v-for="(item, index) in headers"
          :key="index"
          :class="['p-1 sm:p-[15px] md:text-[11px] md:py-[4x] md:px-[6px] font-medium border-2 border-gray-200', headerClass]"
        >
          {{ item.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="border-2 border-gray-200"
      >
        <td
          v-for="(header, colIndex) in headers"
          :key="colIndex"
          class="p-1 sm:p-[15px] md:p-[5px] text-[8px] sm:text-[10px] font-bold border-2 border-gray-200"
        >
          <slot 
          :name="header.key" 
          :row="row" 
          :rowIndex="rowIndex"
          :cellValue="row[header.key]"
           :customClass="customClass"
          >{{
            row[header.key]
          }}</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
defineProps({
  headers: {
    type: Array,
    default: () => [
      { label: "PD (Pupillary distance)", key: "pd" },
      { label: "OD (Right eye)", key: "od" },
      { label: "OS (Left eye)", key: "os" },
    ],
  },
  rows: {
    type: Array,
    default: () => [
      { pd: "63", od: "2.00", os: "2.00" },
      { pd: "63", od: "2.00", os: "2.00" },
    ],
  },
  customClass: {
    type: String,
    default: "",
  },
  headerClass: {
    type: String,
    default: "text-gray-500",
  },
});
</script>
