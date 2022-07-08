import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, FONTS, SHADOWS } from "../../../constants/theme";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Footer from "../../components/Layouts/Footer";
import {
  CheckBox,
  FilterContainer,
  SearchResultHeader,
  SubHeader,
} from "../../components";
import { hotels } from "../../../constants/dummy";
import { HotelVerticalItem } from "../../components/home-components";
import { SecBtn } from "../../components/Forms";

const SearchResult = () => {
  const [onFilter, setOnFilter] = useState(false);
  const [onFreeCancel, setOnFreeCancel] = useState(false);
  const [onHotel, setOnHotel] = useState(false);

  return (
    <View>
      <View
        style={{
          position: "absolute",
          top: 17,
          width: "100%",
          backgroundColor: "white",
          paddingTop: 15,
          // paddingHorizontal: 20,
          zIndex: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <SearchResultHeader
            head="Results"
            body={"Jun 9-10 | 1 room | 1 Guest"}
          />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 8,
            justifyContent: "space-between",
            ...SHADOWS.dark,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setOnFilter(!onFilter)}
            >
              <MaterialIcons name="sort" size={24} color="black" />
              <Text style={{ fontFamily: FONTS.semiBold, marginLeft: 5 }}>
                Sort By
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="By Min Price"
              style={{
                borderWidth: 1,
                borderColor: colors.gray,
                width: 170,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              borderWidth: 1,
              borderColor: colors.darkPrimary,
              height: 40,
              width: 40,
            }}
          >
            <FontAwesome name="dollar" size={15} color="black" />
            <Text style={{ fontFamily: FONTS.semiBold }}>NGN</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: colors.bgGray }}>
        <FlatList
          data={hotels}
          keyExtractor={(item) => item.id}
          style={{
            marginTop: 140,
            marginHorizontal: 20,
            paddingTop: 20,
          }}
          ListHeaderComponent={
            <Text
              style={{
                fontSize: 20,
                color: colors.darkPrimary,
                fontWeight: "700",
              }}
            >
              24 Results(S)
            </Text>
          }
          renderItem={({ item }) => <HotelVerticalItem data={item} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 40, width: "100%" }} />}
        />
      </View>
      {/* Filter Container */}
      {onFilter && (
        <FilterContainer filter={onFilter} setFilter={setOnFilter}>
          <View style={{ marginVertical: 15 }}>
            <SubHeader text={"Payment Type"} />
            <CheckBox
              label={"Free Cancelation"}
              activeChecked={onFreeCancel}
              setActiveChecked={setOnFreeCancel}
            />
            <CheckBox
              label={"Free Cancelation"}
              activeChecked={onFreeCancel}
              setActiveChecked={setOnFreeCancel}
            />
          </View>
          <View style={{ marginVertical: 15 }}>
            <SubHeader text={"Property Type"} />
            <CheckBox
              label={"Hotel"}
              activeChecked={onHotel}
              setActiveChecked={setOnHotel}
            />
            <CheckBox
              label={"Hotel Resort"}
              activeChecked={onHotel}
              setActiveChecked={setOnHotel}
            />
            <CheckBox
              label={"Private Vacation Home"}
              activeChecked={onHotel}
              setActiveChecked={setOnHotel}
            />
            <CheckBox
              label={"Condo"}
              activeChecked={onHotel}
              setActiveChecked={setOnHotel}
            />
            <CheckBox
              label={"Motel"}
              activeChecked={onHotel}
              setActiveChecked={setOnHotel}
            />
            <CheckBox
              label={"Villa"}
              activeChecked={onHotel}
              setActiveChecked={setOnHotel}
            />
          </View>
          <View style={{ marginVertical: 15 }}>
            <SubHeader text={"Neigboer"} />
            <CheckBox
              label={"las Vegas"}
              activeChecked={onHotel}
              setActiveChecked={setOnHotel}
            />
            <CheckBox
              label={"Las Vegas Strip"}
              activeChecked={onHotel}
              setActiveChecked={setOnHotel}
            />
          </View>
          <View style={{ marginVertical: 15 }}>
            <SecBtn text={"Apply"} />
          </View>
        </FilterContainer>
      )}
    </View>
  );
};

export default SearchResult;
