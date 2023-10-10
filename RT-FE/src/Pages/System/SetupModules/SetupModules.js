import MainPage from "../../../Components/Common/MainPage";

export default function SetupModules() {
    return(
        <MainPage title={"Modules"}>
            <div class="container-fluid">
                        <p>In order to make HRMS user interface much simpler to use for you and your employees you can select the purpose of using this application for your company. This will disable unwanted modules and provide you a better user experience.</p>
                        <div class="row bg-light py-2">
                            <div class="col-md-2">
                                <p> <strong>Recruitment</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>Recruitment is the most vital part of HRMS. Job opening Information, job functions, requirements and skills information and staffing status.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch3" switch="bool" />
                                <label for="switch3" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-md-2">
                                <p> <strong>Travels</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>You can easily add new Travel in the system. The form is elaborate with all possible information you might need to add for a new Travel.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch4" switch="bool" checked />
                                <label for="switch4" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row bg-light py-2">
                            <div class="col-md-2">
                                <p> <strong>Files Manager</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>A good solution for managing files and folders for developers who can't access their site over SSH or FTP. Access your files anywhere through self-hosted secure storage, file backup and sharing for your photos, videos, files and more. Upload and download large files for easy sharing.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch5" switch="bool" checked />
                                <label for="switch5" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-md-2">
                                <p> <strong>Multi Language</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>To add a language go to languages/ from top menu. When you add any language then go to application/language/ folder and open your desired language folder and then change the text into other desired language.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch6" switch="bool" checked />
                                <label for="switch6" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row bg-light py-2">
                            <div class="col-md-2">
                                <p> <strong>Organization Chart</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>An organizational chart is a diagram that shows the structure of an organization and the relationships and relative ranks of its parts and positions/jobs.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch7" switch="bool" checked />
                                <label for="switch7" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-md-2">
                                <p> <strong>Event & Meetings</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>Event & meetings system is a simple and advanced script. It is suitable for any one who wants to create event based functionality to their system. You can easily manage your events and meetings so they can be added, updated and deleted in an easy way. All events and meetings will be showing in a calendar with time.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch8" switch="bool" />
                                <label for="switch8" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row bg-light py-2">
                            <div class="col-md-2">
                                <p> <strong>Chat Box</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>HRMS Chat Application is quite hot and easy-to-use for internal communication. Chat immediately as you start your work day. You can use private messages for direct, one-on-one communication.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch9" switch="bool" checked />
                                <label for="switch9" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-md-2">
                                <p> <strong>Sub Department</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p><strong>HRMS</strong> also provides easy sub departments module system, where administrator can add multiple sub departments, and under one sub department administrator can add multiple designations.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch10" switch="bool" checked />
                                <label for="switch10" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row bg-light py-2">
                            <div class="col-md-2">
                                <p> <strong>Payroll</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>Payroll is the most vital part of our <strong>HRMS</strong> . A very intelligent and robust payroll management is provided so that you do not have to worry about any aspect of your payroll management. The system will trigger and do almost everything for you.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch11" switch="bool" checked />
                                <label for="switch11" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-md-2">
                                <p> <strong>Performance</strong> </p>
                            </div>
                            <div class="col-md-8">
                                <p>You can set new performance for designations and employees in the company.</p>
                            </div>
                            <div class="col-md-2">
                                <input type="checkbox" id="switch12" switch="bool" checked />
                                <label for="switch12" data-on-label="Yes" data-off-label="No"></label>

                            </div>
                        </div>

                    </div>
        </MainPage>
    )
};
