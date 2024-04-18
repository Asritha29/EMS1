import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import "./payslips.css";
// Example pay slip data
const paySlips = [
    { id: 1, name: 'John Doe', amount: 2000 },
    { id: 2, name: 'Jane Smith', amount: 2500 },
    // Add more pay slips here
];

// PDF component
const MyDocument = ({ data }) => (
    <Document>
        <Page style={styles.page}>
            {data.map(paySlip => (
                <View key={paySlip.id}>
                    <Text>Name: {paySlip.name}</Text>
                    <Text>Amount: ${paySlip.amount}</Text>
                </View>
            ))}
        </Page>
    </Document>
);

// Styles for PDF
const styles = StyleSheet.create({
    page: {
        padding: 20,
    },
});

const PaySlipDownloader = () => {
    const [selectedPaySlip, setSelectedPaySlip] = useState(null);

    const handleDownload = () => {
        if (selectedPaySlip) {
            // Generate PDF
            const pdfData = (
                <MyDocument data={[selectedPaySlip]} />
            );
            // Trigger download
            PDFDownloadLink({
                document: pdfData,
                fileName: `PaySlip_${selectedPaySlip.id}.pdf`,
            });
        }
    };

    return (
        <div className='pay'>
            <h2>Select Pay Slip:</h2>
            <select onChange={e => setSelectedPaySlip(paySlips.find(p => p.id === parseInt(e.target.value)))}>
                <option value="">Select</option>
                {paySlips.map(paySlip => (
                    <option key={paySlip.id} value={paySlip.id}>{paySlip.name}</option>
                ))}
            </select>
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};

export default PaySlipDownloader;
