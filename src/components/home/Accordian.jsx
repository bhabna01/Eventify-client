

const Accordian = () => {
    return (
        // <div className="p-6">
        //     <h1 className="my-8 text-2xl font-bold text-center">Frequently Asked Questions</h1>

        //     <div className="collapse collapse-arrow bg-base-200 mb-2">
        //         <input type="radio" name="my-accordion-2" defaultChecked />
        //         <div className="collapse-title text-xl font-medium">
        //             How do I purchase tickets?
        //         </div>
        //         <div className="collapse-content">
        //             <p>
        //                 You can purchase tickets directly from our website. Visit the Events page, select the event
        //                 you are interested in, and follow the instructions to complete your purchase.
        //             </p>
        //         </div>
        //     </div>

        //     <div className="collapse collapse-arrow bg-base-200 mb-2">
        //         <input type="radio" name="my-accordion-2" />
        //         <div className="collapse-title text-xl font-medium">
        //             What is the refund policy for tickets?
        //         </div>
        //         <div className="collapse-content">
        //             <p>
        //                 Our refund policy allows for ticket refunds up to 7 days before the event date. After that,
        //                 tickets are non-refundable. Please contact our support team for more information.
        //             </p>
        //         </div>
        //     </div>

        //     <div className="collapse collapse-arrow bg-base-200 mb-2">
        //         <input type="radio" name="my-accordion-2" />
        //         <div className="collapse-title text-xl font-medium">
        //             Where can I find the event schedule?
        //         </div>
        //         <div className="collapse-content">
        //             <p>
        //                 The event schedule is available on the Events page. You can find detailed information
        //                 about each event, including dates, times, and locations.
        //             </p>
        //         </div>
        //     </div>

        //     <div className="collapse collapse-arrow bg-base-200 mb-2">
        //         <input type="radio" name="my-accordion-2" />
        //         <div className="collapse-title text-xl font-medium">
        //             Are there any accommodation options nearby?
        //         </div>
        //         <div className="collapse-content">
        //             <p>
        //                 Yes, we have partnered with several hotels near the event venue. Visit our Accommodations
        //                 page for more details and special rates available for event attendees.
        //             </p>
        //         </div>
        //     </div>

        //     <div className="collapse collapse-arrow bg-base-200 mb-2">
        //         <input type="radio" name="my-accordion-2" />
        //         <div className="collapse-title text-xl font-medium">
        //             How can I contact the event organizers?
        //         </div>
        //         <div className="collapse-content">
        //             <p>
        //                 You can contact the event organizers via email at eventsupport@example.com or by phone at
        //                 (123) 456-7890. Our support team is available Monday through Friday from 9am to 5pm.
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <div className="container mx-auto px-4">
            <div className="p-6">
                <h1 className="my-8 text-2xl font-bold text-center">Frequently Asked Questions</h1>

                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How do I purchase tickets?
                    </div>
                    <div className="collapse-content">
                        <p>
                            You can purchase tickets directly from our website. Visit the Events page, select the event
                            you are interested in, and follow the instructions to complete your purchase.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is the refund policy for tickets?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Our refund policy allows for ticket refunds up to 7 days before the event date. After that,
                            tickets are non-refundable. Please contact our support team for more information.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Where can I find the event schedule?
                    </div>
                    <div className="collapse-content">
                        <p>
                            The event schedule is available on the Events page. You can find detailed information
                            about each event, including dates, times, and locations.
                        </p>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Accordian;