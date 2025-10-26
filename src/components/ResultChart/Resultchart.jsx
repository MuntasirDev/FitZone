import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const purchasedPlans = [
  { userId: "user-001", name: "Rafiq Ahmed", purchasedPlan: "Solo Fitness Plan" },
  { userId: "user-002", name: "Muna Karim", purchasedPlan: "Couple Wellness Plan" },
  { userId: "user-003", name: "Jahid Hasan", purchasedPlan: "WeightX" },
  { userId: "user-004", name: "Fariha Akter", purchasedPlan: "Student Power Plan" },
  { userId: "user-005", name: "Tanvir Hossain", purchasedPlan: "Athlete Performance Plan" },
  { userId: "user-006", name: "Shamima Sultana", purchasedPlan: "Bootcamp Challenge Plan" },
  { userId: "user-007", name: "Arif Chowdhury", purchasedPlan: "Ultimate Elite Plan" },
  { userId: "user-008", name: "Nusrat Jahan", purchasedPlan: "WeightX" },
  { userId: "user-009", name: "Rashed Khan", purchasedPlan: "Weekend Warrior Plan" },
  { userId: "user-010", name: "Tania Rahman", purchasedPlan: "Yoga & Mindfulness Plan" },
  { userId: "user-011", name: "Imran Siddique", purchasedPlan: "Corporate Health Plan" },
  { userId: "user-012", name: "Sadia Parvin", purchasedPlan: "Family Active Plan" },
  { userId: "user-013", name: "Shakib Al Hasan", purchasedPlan: "Silver Wellness Plan" },
  { userId: "user-014", name: "Lamia Islam", purchasedPlan: "Solo Fitness Plan" },
  { userId: "user-015", name: "Fahim Reza", purchasedPlan: "Student Power Plan" },
  { userId: "user-016", name: "Anika Chowdhury", purchasedPlan: "Bootcamp Challenge Plan" },
  { userId: "user-017", name: "Rafi Ullah", purchasedPlan: "WeightX" },
];

// Plan-wise user count
const planCount = purchasedPlans.reduce((acc, plan) => {
  acc[plan.purchasedPlan] = (acc[plan.purchasedPlan] || 0) + 1;
  return acc;
}, {});

// Chart data
const chartData = Object.keys(planCount).map(planName => ({
  plan: planName,
  users: planCount[planName]
}));

// Max sold plan
const maxPlan = chartData.reduce((prev, curr) => (curr.users > prev.users ? curr : prev), { users: 0 });

const Resultchart = () => {
  return (
    <div className="border border-gray-800 bg-gradient-to-b from-black via-gray-900 to-black rounded-xl shadow-xl p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
        Purchased Plans Overview
      </h2>

      <p className="text-green-300 font-semibold mb-4">
        Max Sold Plan: <span className="text-yellow-400">{maxPlan.plan} ({maxPlan.users} users)</span>
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="plan" tick={{ fill: '#9AE6B4', fontSize: 14 }} />
          <YAxis tick={{ fill: '#9AE6B4', fontSize: 14 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1A202C', borderRadius: '8px', border: 'none', color: '#F0FFF4' }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#48BB78"
            strokeWidth={3}
            dot={{ r: 5, fill: "#48BB78" }}
            activeDot={{ r: 7, fill: "#48BB78" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Resultchart;
