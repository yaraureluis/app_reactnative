export const SELECT_LIST_ITEM = "SELECT_LIST_ITEM";
export const FILTERED_LIST_ITEM = "FILTERED_LIST_ITEM";

export const selectListItem = (data) => ({
  type: SELECT_LIST_ITEM,
  listItemID: data.item_id,
  data: data,
});

export const filteredList = (id) => ({
  type: FILTERED_LIST_ITEM,
  listID: id,
});
