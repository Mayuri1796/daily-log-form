function btn() {
  const add = document.getElementById('formcont');
  let html = `<form>
                <div class="row">
                <div class="col-3">
                  <h2>TASK</h2>
                </div>
              </div>
                <div class="col-12">
                 <div class="wrapper">
                  <div class="select-btn">
                    <span>Select Country</span>
                    <i class="uil uil-angle-down"></i>
                  </div>
                  <div class="content">
                    <div class="search">
                      <i class="uil uil-search"></i>
                      <input spellcheck="false" type="text" placeholder="Search">
                    </div>
                    <ul class="options"></ul>
                  </div>
                </div>
                </div>
                <div class="col-12">
                <label>What task did you perform?</label>
                <div class="mb-4"> <select class="js-states form-control" name="selecttask" id="selecttask" required>
                    <option value="" selected hidden></option>
                    <option value="1" data-state="client1">Engagement Story</option>
                    <option value="2" data-state="client2">Instagram Post</option>
                    <option value="3" data-state="client1">Facebook Post</option>
                    <option value="4" data-state="client3">LinkedIn Post</option>
                    <option value="5" data-state="client1">Caption</option>
                    <option value="6" data-state="client3">Social Media Calendar</option>
                    <option value="7" data-state="client2">Social Media Deck compilation</option>
                    <option value="8" data-state="client3">Research</option>
                    <option value="9" data-state="client3">Competitor analysis</option>
                    <option value="10" data-state="client3">Campaign</option>
                    <option value="11" data-state="client3">Insight Mining</option>
                    <option value="12" data-state="client3">Meeting - Client</option>
                    <option value="13" data-state="client3">Meeting - Internal</option>
                    <option value="14" data-state="client3">Meeting - Design</option>
                    <option value="15" data-state="client3">Google Ad</option>
                    <option value="16" data-state="client3">Reel Script</option>
                    <option value="17" data-state="client3">Video Script</option>
                    <option value="18" data-state="client3">Website Page</option>
                    <option value="19" data-state="client3">Website Banner</option>
                    <option value="20" data-state="client3">Blog post</option>
                    <option value="21" data-state="client3">Feedback</option>
                    <option value="22" data-state="client3">Break</option>
                  </select></div>
              </div>
              <div class="row">
                <label>How long did it take you?</label>
                <div class="col-6">
                  <div class="mb-4"> <select class="form-control" required>
                      <option value="" selected hidden>Hour</option>
                      <option>0hr</option>
                      <option>1hr</option>
                      <option>2hrs</option>
                      <option>3hrs</option>
                      <option>4hrs</option>
                      <option>5hrs</option>
                      <option>6hrs</option>
                      <option>7hrs</option>
                      <option>8hrs</option>
                    </select></div>
                </div>
                <div class="col-6">
                  <div class="min"> <select class="form-control" required>
                      <option value="" selected hidden>Minute</option>
                      <option>15 mins</option>
                      <option>30mins</option>
                      <option>45mins</option>
                    </select></div>
                </div>
              </div>
                <div class="col-12">
                  <label>Add Comments</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </form>`;
  add.insertAdjacentHTML('afterbegin', html);
}
