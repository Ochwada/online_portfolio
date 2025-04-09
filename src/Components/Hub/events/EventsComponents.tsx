import React, { useState } from 'react';
import { eventsPosts, toolColors } from "@/Components/Constant";
import CategoryFilter from "./CategoryFilter";



const getStyleFor = (label: string) => {
    const key = `#${label}`;
    return toolColors[key] || { bg: "bg-gray-100", text: "text-gray-700" };
};

const EventsComponents: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
        setShowAll(true); // show all when filtered
    };

    const handleClearTag = () => {
        setSelectedTag(null);
        setShowAll(false);
    };

    const allCategories = Array.from(
        new Set(eventsPosts.flatMap((post) => post.category || []))
    );


    const today = new Date().toISOString().split("T")[0];

    // Sort helper (YYYY-MM-DD format works lexicographically)
    const sortedEvents = [...eventsPosts].sort((a, b) => b.date.localeCompare(a.date));

    const pastEvents = sortedEvents.filter((post) => post.date < today);
    const futureEvents = sortedEvents.filter((post) => post.date >= today);

    const filterByCategory = (posts: typeof eventsPosts) => {
        return selectedCategory
            ? posts.filter((post) => post.category?.includes(selectedCategory))
            : posts;
    };

    const filteredPastEvents = filterByCategory(
        selectedTag
            ? pastEvents.filter((post) => post.tag?.includes(selectedTag))
            : pastEvents
    );

    const filteredFutureEvents = filterByCategory(
        selectedTag
            ? futureEvents.filter((post) => post.tag?.includes(selectedTag))
            : futureEvents
    );

    const visiblePastEvents = showAll
        ? filteredPastEvents
        : filteredPastEvents.slice(0, 6);

    return (
        <div className="flex flex-col md:flex-row mt-16 px-4 sm:px-8">
            <div className="p-4 sm:p-8 pb-2 mb-12 w-full">
                <h1 className="md:text-4xl text-2xl font-bold text-start mb-4">
                    Beyond the Code: <span className="text-mypink">Events</span>
                </h1>

                <p className="mb-8">
                    A curated list of events, conferences, and community gatherings I've participated in—sharing
                    insights, talks, and moments that shaped my journey.
                    <br />
                    <br />
                    Feel free to{" "}
                    <a
                        href="/hub/contact"
                        className="text-mypurple underline font-bold"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        reach out
                    </a>{" "}
                    if you have any questions, comments, or invitations.
                </p>

                {selectedTag && (
                    <div className="mb-6">
                        <p className="text-sm mb-2">
                            Showing events tagged with{" "}
                            <span className="font-semibold">#{selectedTag}</span>
                        </p>
                        <button
                            onClick={handleClearTag}
                            className="text-xs text-mypink underline hover:text-mypurple"
                        >
                            ✖ Clear Filter
                        </button>
                    </div>
                )}
                <CategoryFilter
                    categories={allCategories}
                    selectedCategory={selectedCategory}
                    onChange={setSelectedCategory}
                />

                {/* Upcoming Events */}
                {filteredFutureEvents.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">
                            Upcoming Events ({filteredFutureEvents.length})
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredFutureEvents.map((post, index) => (
                                <div
                                    key={`future-${post.id || index}`}
                                    className="w-full border border-green-200/[0.25] rounded shadow-green-200 shadow-md p-6 bg-green-50/[0.4] dark:bg-gray-900/[0.75]"
                                >
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-semibold text-green-800">{post.title}</h4>
                                        <p className="text-xs text-gray-400">{post.date}</p>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{post.description}</p>

                                        <div>
                                            {post.category?.map((cat, i) => {
                                                const style = getStyleFor(cat);
                                                return (
                                                    <span
                                                        key={`cat-${i}`}
                                                        className={`text-xs ${style.bg} ${style.text} px-2 py-0.5 rounded-full`}
                                                    > {cat}
                                                    </span>
                                                );
                                            })}
                                            {post.subcategory?.map((sub, i) => {
                                                const style = getStyleFor(sub);
                                                return (
                                                    <span
                                                        key={`sub-${i}`}
                                                        className={`text-xs ${style.bg} ${style.text} px-2 py-0.5 rounded-full`}
                                                    >{sub}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        <div>
                                            <span className="text-xs text-gray-400 my-2">🖱️ Click tag to view related events</span>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {post.tag?.map((tag, i) => {
                                                    const style = getStyleFor(tag);
                                                    return (
                                                        <button
                                                            key={`tag-${i}`}
                                                            onClick={() => handleTagClick(tag)}
                                                            className={`text-xs ${style.bg} ${style.text} px-2 py-0.5 rounded-full hover:underline transition`}
                                                        >
                                                            #{tag}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <a
                                            href={post.eventLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 text-xs text-purple-500 hover:underline"
                                        >
                                            Read More ↗
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Past Events */}
                <h2 className="text-2xl font-bold mb-4">
                    Past Events ({filteredPastEvents.length})
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visiblePastEvents.map((post, index) => (
                        <div
                            key={`past-${post.id || index}`}
                            className="w-full border border-gray-200/[0.25] rounded-md shadow-pink-200 shadow-lg p-6 bg-gray-100/[0.75] dark:bg-gray-900/[0.75]"
                        >
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold text-mypurple">{post.title}</h4>
                                <p className="text-xs text-gray-400">{post.date}</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{post.description}</p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {post.category?.map((cat, i) => {
                                        const style = getStyleFor(cat);
                                        return (
                                            <span
                                                key={`cat-${i}`}
                                                className={`text-xs ${style.bg} ${style.text} px-2 py-0.5 rounded-xl`}
                                            >{cat}</span>
                                        );
                                    })}
                                    {post.subcategory?.map((sub, i) => {
                                        const style = getStyleFor(sub);
                                        return (
                                            <span
                                                key={`sub-${i}`}
                                                className={`text-xs ${style.bg} ${style.text} px-2 py-0.5 rounded-xl`}
                                            >{sub}</span>
                                        );
                                    })}
                                </div>

                                <div>
                                    <span className="text-xs text-gray-400">🖱️ Click tag to view related events</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {post.tag?.map((tag, i) => {
                                            const style = getStyleFor(tag);
                                            return (
                                                <button
                                                    key={`tag-${i}`}
                                                    onClick={() => handleTagClick(tag)}
                                                    className={`text-xs ${style.bg} ${style.text} px-2 py-0.5 rounded-md hover:underline transition`}
                                                >
                                                    #{tag}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {post.eventLink ? (
                                    <a
                                        href={post.eventLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 text-xs text-purple-500 hover:underline"
                                    >
                                        Read More ↗
                                    </a>
                                ) : (
                                    <span className="mt-3 text-xs text-gray-400 italic"> Link: (N/A)</span>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

                {/* More Events Button */}
                {!showAll && filteredPastEvents.length > 6 && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-sm text-mypurple hover:underline font-medium"
                        >
                            + Older Events ({filteredPastEvents.length - 6} more)
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsComponents;
