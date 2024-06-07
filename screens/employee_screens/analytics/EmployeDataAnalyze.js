import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LineChart, PieChart, BarChart, ContributionGraph } from 'react-native-chart-kit';

const EmployeeDataAnalyze = () => {
    const [selectedChart, setSelectedChart] = useState('work');

    const chartsData = {
        work: {
            title: 'Work Analytics',
            description: 'Track your work performance over time.',
            pieChartData: [
                { name: 'Completed', population: 70, color: '#4CAF50', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Pending', population: 30, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            ],
            barChartData: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                datasets: [{ data: [20, 45, 28, 80, 99], color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})` }],
            },
            lineChartData: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        data: [50, 70, 85, 60],
                        color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`, // green for current data
                    },
                    {
                        data: [30, 50, 60, 40],
                        color: (opacity = 1) => `rgba(244, 67, 54, ${opacity})`, // red for previous data
                    },
                ],
            },
        },
        attendance: {
            title: 'Attendance Analytics',
            description: 'Track your attendance over time.',
            pieChartData: [
                { name: 'Present', population: 80, color: '#4CAF50', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Absent', population: 20, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            ],
            barChartData: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{ data: [5, 10, 15, 8], color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})` }],
            },
            lineChartData: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                    {
                        data: [70, 60, 80, 75],
                        color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`, // green for current data
                    },
                    {
                        data: [60, 50, 70, 65],
                        color: (opacity = 1) => `rgba(244, 67, 54, ${opacity})`, // red for previous data
                    },
                ],
            },
        },
        performance: {
            title: 'Performance Analytics',
            description: 'Track your overall performance over time.',
            pieChartData: [
                { name: 'Excellent', population: 50, color: '#4CAF50', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Good', population: 30, color: '#2196F3', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Average', population: 20, color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            ],
            barChartData: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{ data: [80, 85, 75, 90], color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})` }],
            },
            lineChartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                datasets: [
                    {
                        data: [70, 80, 85, 90, 75, 95, 70, 60],
                        color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`, // green for current data
                    },
                    {
                        data: [60, 70, 80, 85, 90, 80, 75, 90],
                        color: (opacity = 1) => `rgba(244, 67, 54, ${opacity})`, // red for previous data
                    },
                ],
            },
        },
    };

    const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 1 },
        { date: "2017-01-04", count: 1 },
        { date: "2017-01-05", count: 1 },
        { date: "2017-01-06", count: 1 },
        { date: "2017-01-30", count: 1 },
        { date: "2017-01-31", count: 1 },
        { date: "2017-02-01", count: 1 },
        { date: "2017-02-02", count: 1 },
        { date: "2017-02-03", count: 1 },
        { date: "2017-02-04", count: 1 },
        { date: "2017-03-01", count: 1 },
        { date: "2017-03-02", count: 1 },
        { date: "2017-03-03", count: 1 },
        { date: "2017-03-04", count: 1 },
        { date: "2017-04-01", count: 1 },
        { date: "2017-04-02", count: 1 },
        { date: "2017-04-03", count: 1 },
        { date: "2017-04-04", count: 1 },
        { date: "2017-05-01", count: 1 },
        { date: "2017-05-02", count: 1 },
        { date: "2017-05-03", count: 1 },
        { date: "2017-05-04", count: 1 },
        { date: "2017-06-01", count: 1 },
        { date: "2017-06-02", count: 1 },
        { date: "2017-06-03", count: 1 },
        { date: "2017-06-04", count: 1 },
        { date: "2017-07-01", count: 1 },
        { date: "2017-07-02", count: 1 },
        { date: "2017-07-03", count: 1 },
        { date: "2017-07-04", count: 1 },
        { date: "2017-08-01", count: 1 },
        { date: "2017-08-02", count: 1 },
        { date: "2017-08-03", count: 1 },
        { date: "2017-08-04", count: 1 },
        { date: "2017-09-01", count: 1 },
        { date: "2017-09-02", count: 1 },
        { date: "2017-09-03", count: 1 },
        { date: "2017-09-04", count: 1 },
        { date: "2017-10-01", count: 1 },
        { date: "2017-10-02", count: 1 },
        { date: "2017-10-03", count: 1 },
        { date: "2017-10-04", count: 1 },
        { date: "2017-11-01", count: 1 },
        { date: "2017-11-02", count: 1 },
        { date: "2017-11-03", count: 1 },
        { date: "2017-11-04", count: 1 },
        { date: "2017-12-01", count: 1 },
        { date: "2017-12-02", count: 1 },
        { date: "2017-12-03", count: 1 },
        { date: "2017-12-04", count: 1 }
    ];

    const renderChart = () => {
        const chartData = chartsData[selectedChart];
        const chartConfig = {
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
        };

        return (
            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>{chartData.title}</Text>
                <Text style={styles.chartDescription}>{chartData.description}</Text>
                <PieChart
                    data={chartData.pieChartData}
                    width={350}
                    height={200}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    style={{
                        borderWidth: 0.2,
                        borderRadius: 10,
                    }}
                />
                {/* {selectedChart !== 'attendance' && (
                    <> */}
                        <BarChart
                            data={chartData.barChartData}
                            width={350}
                            height={200}
                            chartConfig={chartConfig}
                            style={styles.chart}
                            fromZero
                            showBarTops={true}
                            showValuesOnTopOfBars={true}
                            withInnerLines={false}
                        />
                        <LineChart
                            data={chartData.lineChartData}
                            width={350}
                            height={200}
                            chartConfig={chartConfig}
                            style={styles.chart}
                            bezier
                            withDots={true}
                            withInnerLines={false}
                            withOuterLines={true}
                            formatYLabel={value => `${value}%`}
                            fromZero
                            withShadow={true}
                            segments={5}
                        />
                    {/* </>
                )} */}
                {/* {selectedChart === 'attendance' && (
                    <>
                        <View style={styles.legendContainer}>
                            <View style={styles.legendItem}>
                                <View style={[styles.legendColor, { backgroundColor: '#161616' }]} />
                                <Text style={styles.legendText}>Present</Text>
                            </View>
                            <View style={styles.legendItem}>
                                <View style={[styles.legendColor, { backgroundColor: '#e3e3e3' }]} />
                                <Text style={styles.legendText}>Absent</Text>
                            </View>
                        </View>
                        <ScrollView horizontal>
                            <ContributionGraph
                                values={commitsData}
                                endDate={new Date("2017-12-31")}
                                numDays={365}
                                width={1150}
                                height={220}
                                chartConfig={chartConfig}
                                style={{
                                    borderRadius: 10,
                                    marginTop: 10
                                }}
                                showOutOfRangeDays={true}
                                getMonthLabel={(index) => {
                                    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                                    return months[index];
                                }}
                                accessor="count"
                            // colorForValue={(value) => value > 0 ? '#0000FF' : '#ADD8E6'}
                            />
                        </ScrollView>
                    </>
                )} */}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer} className={`${selectedChart === 'attendance' ? 'pt-0' : ''}`}>
                {Object.keys(chartsData).map((key) => (
                    <FilterButton key={key} chartKey={key} selectedChart={selectedChart} onPress={() => setSelectedChart(key)} />
                ))}
            </View>
            {renderChart()}
        </View>
    );
};

const FilterButton = ({ chartKey, selectedChart, onPress }) => {
    const isSelected = chartKey === selectedChart;
    const chartTitle = chartKey.charAt(0).toUpperCase() + chartKey.slice(1);
    return (
        <TouchableOpacity onPress={onPress} style={[styles.filterButton, isSelected && styles.selectedFilterButton]}>
            <Text style={styles.filterButtonText}>{chartTitle}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30
    },
    filterContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 40
    },
    filterButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#bdbdbd',
        borderRadius: 8,
        marginRight: 10,
    },
    selectedFilterButton: {
        backgroundColor: '#3B82F6',
    },
    filterButtonText: {
        color: 'white',
    },
    chartContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    chart: {
        marginTop: 15,
        borderRadius: 10,
    },
    chartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
    },
    chartDescription: {
        fontSize: 16,
        marginBottom: 20,
        color: '#666666',
    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 20
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    legendColor: {
        width: 15,
        height: 15,
        borderRadius: 3,
        marginRight: 5,
    },
    legendText: {
        fontSize: 14,
    },
});

export default EmployeeDataAnalyze;
