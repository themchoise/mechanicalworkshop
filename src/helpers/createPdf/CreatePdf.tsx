
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const CreatePdf = () => (
  <PDFViewer>
  <Document>
  <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>My PDF Content</Text>
          </View>
        </Page>
  </Document>
  </PDFViewer>
);



export default CreatePdf;