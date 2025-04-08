import React from 'react';

const EventsComponents: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row mt-16 px-4 sm-px-8">
            <div className="p-4 sm:p-8 pb-2 mb-12">
                <h1 className="md:text-4xl text-2xl font-bold text-start mb-4">
                    Beyond the Code: <span className="text-mypink">Events</span>
                </h1>

                <p className="mb-8">
                    A curated list of events, conferences, and community gatherings I've participated in—sharing
                    insights, talks, and moments that shaped my journey.

                    <br/>
                    <br/>
                    Feel free to <a href="/hub/contact" className="text-mypurple underline  font-bold" target="_blank"
                                    rel="noopener noreferrer"> reach out </a> if you have any Questions or Comments or Invite.
                    Happy reading!

                </p>

            </div>

        </div>
    );
};

export default EventsComponents;
