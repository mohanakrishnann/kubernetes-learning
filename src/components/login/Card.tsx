import React from 'react';

const Card = () => {
    return (
        <div className="w-96 h-90 mx-3 bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">Vehicle Line Ranking</h2>
            <h3 className="text-xl">Data as of 5/14/2024</h3>

            <div className="w-64 mx-auto ml-3 mt-5">
                <label className=" text-sm font-medium text-gray-700">
                    level
                </label>
                <select
                    id="dropdown"
                    name="dropdown"
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <div className="mt-12">
                    <label className=" text-sm font-medium text-gray-700  ">
                        Vehicle Line
                    </label> <select
                    id="dropdown"
                    name="dropdown"
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                </div>
                <div className=" items-center justify-center h-screen mt-10 mr-5">
                    <div className="w-full">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    MTD
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                   YTD
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Vehicle Sales Ranking</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Vehicle Sales Ranking</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Value 3</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Value 4</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sales(Vehicles)</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sales(Vehicles)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;
