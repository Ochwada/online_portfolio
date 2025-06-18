// competence/TechStack.tsx
"use client";

import React from "react";
import dynamic from 'next/dynamic';

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion"

const DonutChart =
    dynamic(() => import('@/Components/Competence/DonutChart'),
        {
    ssr: false,
});

const TechStack = () => {
    return (

            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                {/* Programming Languages */}
                <AccordionItem value="item-1">
                    <AccordionTrigger className="ibm-plex-mono-regular text-purple-600">
                        Programming Languages
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-3 items-center">
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Java</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.4} />
                                    <span className="text-xs">0.4</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Python</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.6} />
                                    <span className="text-xs">0.6</span>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Frameworks & Technologies */}
                <AccordionItem value="item-2">
                    <AccordionTrigger className="ibm-plex-mono-regular text-purple-600">
                        Frameworks & Technologies
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div>
                                <h3 className="ibm-plex-mono-semibold underline underline-offset-2">
                                    Frontend frameworks  {/* Frontend frameworks*/}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>React</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.5} />
                                    <span className="text-xs">0.5</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Next.js</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.5} />
                                    <span className="text-xs">0.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div></div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Vue</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.3} />
                                    <span className="text-xs">0.5</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Vite</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.4} />
                                    <span className="text-xs">0.5</span>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-3 gap-3 items-center mt-2">
                            <div>
                                <h3 className="ibm-plex-mono-semibold underline underline-offset-2">
                                    Backend frameworks {/* Backend frameworks */}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Node.js</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.5} />
                                    <span className="text-xs">0.5</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Spring Boot</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.1} />
                                    <span className="text-xs">0.1</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div></div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Django</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.3} />
                                    <span className="text-xs">0.3</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                {/*<div>Vite</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.4} />
                                    <span className="text-sm">0.5</span>
                                </div>*/}
                            </div>
                        </div>


                        <div className="grid grid-cols-3 gap-3 items-center mt-2">
                            <div>
                                <h3 className="ibm-plex-mono-semibold underline underline-offset-2">
                                    Dev tools {/* Dev tools*/}
                                </h3>
                            </div>

                        </div>

                        <div className="grid grid-cols-3 gap-3 items-center mt-2">
                            <div>
                                <h3 className="ibm-plex-mono-semibold underline underline-offset-2">
                                    Cloud/platforms {/* Cloud/platforms*/}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Firebase</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.2} />
                                    <span className="text-xs">0.2</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>AWS</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.3} />
                                    <span className="text-xs">0.3</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div></div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Render</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.1} />
                                    <span className="text-xs">0.1</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Netlify</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.6} />
                                    <span className="text-sm"> 0.6</span>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Databases */}
                <AccordionItem value="item-3">
                    <AccordionTrigger className="ibm-plex-mono-regular text-purple-600">
                        Databases
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-3 items-center">
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>PostgreSQL</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.6} />
                                    <span className="text-xs">0.6</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>Oracle</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.4} />
                                    <span className="text-xs">0.4</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 items-center">
                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>MongoDB</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.5} />
                                    <span className="text-xs">0.5</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 items-center">
                                <div>MySQL</div>
                                <div className="flex items-center gap-2">
                                    <DonutChart value={0.4} />
                                    <span className="text-xs">0.4</span>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
    );
};

export default TechStack;