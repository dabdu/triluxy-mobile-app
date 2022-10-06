import { View, FlatList } from "react-native";
import React from "react";
import { SearchResultHeader, WarningText } from "../../components";
import { RoomItem } from "../../components/hotel-components";
import { useRoute } from "@react-navigation/native";

const SelectRoomScreen = () => {
  const route = useRoute();
  const { searchedData, categories, calDays } = route?.params;
  return (
    <View style={{ paddingTop: 31 }}>
      <SearchResultHeader
        head="Select Rooms"
        body={`${searchedData?.checkInDate} |-| ${searchedData?.checkOutDate} `}
      />
      <WarningText text={"Find a cancellation policy that works for you"} />
      <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <RoomItem
              category={item}
              searchedData={searchedData}
              calDays={calDays}
            />
          )}
          ListFooterComponent={<View style={{height: 200, width: "100%"}} />}
        />
      </View>
    </View>
  );
};

export default SelectRoomScreen;
