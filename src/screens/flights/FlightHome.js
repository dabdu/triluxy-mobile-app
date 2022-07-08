import { View, Text, FlatList } from "react-native";
import React from "react";
import { Header } from "../../components";
import { colors } from "../../../constants/theme";
import { CountryItem } from "../../components/flight-components";
import Footer from "../../components/Layouts/Footer";

const FlightHome = () => {
  const data = [
    {
      id: "hjsh7sshsh",
      image:
        "https://s3-alpha-sig.figma.com/img/0f8f/6b9a/257f9396305b2c8bcd74fc26b6335e8e?Expires=1657497600&Signature=fTJ8uZ3RiQR8jfEhLj1QafsfRhVKUnqTDVPdqj8AfbwqAPy6Sdp6vQEuBwGioyIITZogV5VuryQak1mPwFEQSFPkkufv3xHRuPeXrHdrdIMglk~ZH8u4G3OcLIk7ExrT~37-3fkdxjqoHiER8Qi5uv8P3zxvm5q3960VAw97SkskJruJXVNAZu3b0bJXl4gPbH0gzku1Q6lC56pb1Y7rZUMTLwY1Odj81v0EO2EmCdwPxJ2QHultUWq0g7IGBPVf~MO-YYqlZ5exL6Tsh2v6tLBE5JMKwBC3BQI3mnnW-UaUMHk4uYN82i7uaYBBPgzX-~4s5a9kbwwRQMKpMR2e8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      name: "Turkey",
      desc: "COVID-19 test required",
      flagImg:
        "https://static.vecteezy.com/system/resources/previews/001/176/937/original/flag-of-turkey-background-vector.jpg",
    },
    {
      id: "hjshsh",
      image:
        "https://s3-alpha-sig.figma.com/img/222f/0132/2b1af07a46882e7633bc8d98b1d2d44e?Expires=1657497600&Signature=LyN1AED~6H7PcW729AK22kBwAJIIqwoSpi27t7He-RWT5qsw~mPmA7nl6EA8zZsWCubwFwqrjjqUBxn-glWektz~xBUpQe9YjKwz1IkxvesGta6p36VoXMCQVYpzLOmq6oIZ2ROJjXtBuKQrjl8cgzVx6gUis9xrEVC5X5DGU9haH8Z2pSOgmFYNVps9HUlOXUyKGyuu~hFHhexatVxVg5MRZadY3x3dtzsjMXQUHHTXp8N2pAaxyzyVQFAKnJDmt01wJtFl-dFM9b-xZ6qRcfB~Krv~2f38edA~30tzHO0pqCRRqFakTN7Sm5Nv-ZqQAcu3otdZfUY1mTZCwgEePw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      name: "Mexico",
      desc: "COVID-19 test required",
      flagImg:
        "https://th.bing.com/th/id/R.91481f852f4a9987e91a48fba51b194d?rik=dy9JhvPldVx8IQ&riu=http%3a%2f%2fthelifenomadic.com%2fwp-content%2fuploads%2f2015%2f08%2fmexican-flag.jpg&ehk=MaBXGQbAG6n0oPtmfJ%2fb5NTsnPcqiP4AfOB2eklcVic%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header
        placeholder={"Fly anywhere with flexibility"}
        active={"flight"}
        searchPath={"FlightSearchScreen"}
      />
      <View
        style={{ width: "100%", paddingHorizontal: 10, marginVertical: 20 }}
      >
        <Text
          style={{
            color: colors.darkPrimary,
            fontFamily: "OpenSansBold",
            fontSize: 18,
          }}
        >
          Destinations you can travel to
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 12, color: "gray" }}>
            Popular destinations you can explore from Nigeria
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "800",
              color: colors.primary,
              textDecorationLine: "underline",
            }}
          >
            See all
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 0 }}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <CountryItem country={item} index={index} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Footer active={"search"} searchPath={"FlightSearchScreen"} />
    </View>
  );
};

export default FlightHome;
