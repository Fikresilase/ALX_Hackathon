"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Users, Clock3, Languages, TrendingUp } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
} from "chart.js";
import { ChartData } from "chart.js";
ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip
);

export default function AnalyticsDashboard() {
	const [chartData, setChartData] = useState<ChartData<"line">>({
		labels: [],
		datasets: [],
	});

	const [trainingCondition, setTrainingCondition] = useState("--");
	const [avgTime, setAvgTime] = useState("--");
	const [languageScores, setLanguageScores] = useState({
		English: 0,
		French: 0,
		Spanish: 0,
	});

	useEffect(() => {
		// Simulate fetching data from backend
		const fetchStats = async () => {
			// Replace with your actual API calls
			const response = await fetch("/api/training-stats");
			const data = await response.json();

			setChartData({
				labels: data.labels,
				datasets: [
					{
						label: "Training Hours",
						data: data.hours,
						fill: true,
						borderColor: "#8b5cf6",
						backgroundColor: "rgba(139, 92, 246, 0.2)",
						tension: 0.4,
					},
				],
			});

			setTrainingCondition(data.trainingCondition);
			setAvgTime(data.avgTime);
			setLanguageScores(data.languageScores);
		};

		fetchStats();
	}, []);

	const lineChartOptions = {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				ticks: { color: "#a1a1aa" },
				grid: { color: "#27252C" },
			},
			x: {
				ticks: { color: "#a1a1aa" },
				grid: { display: false },
			},
		},
	};

	return (
		<div className="bg-[#0D0C0F] text-white p-6 font-sans">
			{/* Main Layout */}
			<main className="ml-24">
				{/* Top Section */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-3xl font-bold text-white">
						Training Overview
					</h1>
					<div className="flex items-center gap-4">
						<span className="text-sm text-zinc-300">Admin</span>
						<Avatar>
							<AvatarImage src="/avatar.png" />
							<AvatarFallback>AU</AvatarFallback>
						</Avatar>
					</div>
				</div>

				{/* Analytics Overview Section */}
				<div className="bg-[#1C1B20] p-6 rounded-xl shadow-lg mb-6">
					<div className="grid grid-cols-3 gap-6">
						{/* Overall Training Condition */}
						<Card className="bg-gradient-to-br from-[#27252C] to-[#1F1F24] border-none text-white">
							<CardHeader>
								<CardTitle className="text-lg text-[#4cb657]">
									Overall Training Condition
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-4xl font-bold text-green-400">
									{trainingCondition}
								</p>
								<p className="text-xs text-zinc-400 mt-1">
									Stable across all modules
								</p>
							</CardContent>
						</Card>

						{/* Score per Language */}
						<Card className="bg-gradient-to-br from-[#27252C] to-[#1F1F24] border-none text-white">
							<CardHeader>
								<CardTitle className="text-lg text-[#4cb657]">
									Score per Language
								</CardTitle>
							</CardHeader>
							<CardContent className="text-sm text-zinc-300 space-y-1">
								{Object.entries(languageScores).map(([lang, score]) => (
									<div key={lang} className="flex justify-between">
										<span>{lang}</span>
										<span className="text-white font-semibold">
											{score}%
										</span>
									</div>
								))}
							</CardContent>
						</Card>

						{/* Average Time Spent */}
						<Card className="bg-gradient-to-br from-[#27252C] to-[#1F1F24] border-none text-white">
							<CardHeader>
								<CardTitle className="text-lg text-[#4cb657]">
									Avg. Time on Training
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-4xl font-bold text-blue-400">
									{avgTime}
								</p>
								<p className="text-xs text-zinc-400 mt-1">
									30-day average
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Training Statistics Graph */}
				<div className="bg-[#1C1B20] p-6 rounded-xl shadow-lg">
					<h2 className="text-xl font-semibold mb-4 text-white">
						Training Activity (Hours per Day)
					</h2>
					<div className="bg-[#141317] p-4 rounded-lg">
						<Line
							data={chartData}
							options={lineChartOptions}
							height={100}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
 