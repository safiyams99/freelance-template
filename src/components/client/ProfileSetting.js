import React from "react";
export default function ProfileSetting(props) {
  return (
    <>
      <div id="settings" class="tab-pane fade in active">
        <div class="row no-mrg">
          <h3>Edit Profile</h3>
          <div class="edit-pro">
            <div class="col-md-4 col-sm-6">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.fname}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Middle Name</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.mname}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.lname}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                placeholder={props.email}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Phone</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.phone}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Zip / Postal</label>
              <input type="text" class="form-control" placeholder={props.zip} />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Address</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.address}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Address 2</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.desig}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Organization</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.company}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>City</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.city}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>State</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.state}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Country</label>
              <input
                type="text"
                class="form-control"
                placeholder={props.country}
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Old Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="*********"
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>New Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="*********"
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Old Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="*********"
              />
            </div>
            <div class="col-md-4 col-sm-6">
              <label>About you</label>
              <textarea
                class="form-control"
                placeholder={props.desc}
              ></textarea>
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Upload Profile Pic</label>
              <form action="" class="dropzone dz-clickable profile-pic">
                <div class="dz-default dz-message">
                  <input type="file" class="dz-default dz-message" />

                  <i class="fa fa-cloud-upload"></i>
                  <span>Drop files here to upload</span>
                </div>
              </form>
            </div>
            <div class="col-md-4 col-sm-6">
              <label>Upload Profile Cover</label>
              <form action="" class="dropzone dz-clickable profile-cover">
                <div class="dz-default dz-message">
                  <input type="file" class="dz-default dz-message" />

                  <i class="fa fa-cloud-upload"></i>
                  <span>Drop files here to upload</span>
                </div>
              </form>
            </div>
            <div class="col-sm-12">
              <button type="button" class="update-btn">
                Update Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
