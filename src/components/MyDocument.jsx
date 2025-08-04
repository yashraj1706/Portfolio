import React from "react";
import { Document, Page, Text, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 30,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.text}>This is a PDF generated with React-PDF</Text>
    </Page>
  </Document>
);

const ResumeViewer = () => (
  <div>
    <PDFViewer width="100%" height="600">
      <MyDocument />
    </PDFViewer>
  </div>
);

export default ResumeViewer;
