import React from "react";
import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
});

const PrintAsset = ({ row }) => {
  // const { data: requestData = [], refetch, isLoading } = useQuery({
  //   queryKey: ["requestData", row?.hr_email],
  //   queryFn: async () => {
  //     const { data } = await axiosSecure(
  //       `/hrinformation/${row?.hr_email}`
  //     );
  //     return data;
  //   },
  // });

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Asset Details</Text>
        <Text style={styles.section}>
          <Text style={styles.label}>Asset Name: </Text>
          {row?.product_name}
        </Text>
        <Text style={styles.section}>
          <Text style={styles.label}>Asset Type: </Text>
          {row?.product_type}
        </Text>
        <Text style={styles.section}>
          <Text style={styles.label}>Request Date: </Text>
          {row?.request_date} {format(new Date(row?.request_date), "dd/MM/yyyy")}

        </Text>
        <Text style={styles.section}>
          <Text style={styles.label}>Approval Date: </Text>
          {row?.approval_date}
        </Text>
        <Text style={styles.section}>
          <Text style={styles.label}>Status: </Text>
          {row?.request_status}
        </Text>
      </Page>
    </Document>
  );
};

export default PrintAsset;
