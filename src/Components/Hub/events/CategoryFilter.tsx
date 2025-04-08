import React from "react";

type Props = {
    categories: string[];
    selectedCategory: string | null;
    onChange: (category: string | null) => void;
};

const CategoryFilter: React.FC<Props> = ({
                                             categories,
                                             selectedCategory,
                                             onChange,
                                         }) => {
    const sortedCategories = [...categories].sort((a, b) =>
        a.localeCompare(b)
    );

    return (
        <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200 mr-2">
                Filter by Category:
            </label>
            <select
                value={selectedCategory || ""}
                onChange={(e) =>
                    onChange(e.target.value === "" ? null : e.target.value)
                }
                className="text-sm px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white
                dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-1 focus:ring-mypink"
            >
                <option value="">All</option>
                {sortedCategories.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
