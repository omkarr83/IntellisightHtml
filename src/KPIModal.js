import ReactDOM from "react-dom";

const KPIModal = ({ showKPI, onCloseKPI }) => {
  if (!showKPI) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop fade show"></div>

      <div className="modal fade show kpi_modal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Add New KPI</h6>
              <button type="button" className="btn-close1" onClick={onCloseKPI}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>


            {/* Modified the modal body as on 10-02-2026 start  */}
            <div className="modal-body">

              <div className="row row_first">
                <div className="col pb-3 pt-2">
                  <label htmlFor="project_kpi" className="form-label">Project KPI <span className="mandatory">*</span></label>
                  <select className="form-select" id="project_kpi" defaultValue="">
                      <option value="">Select project KPI</option>
                      <option value="Project 1">Project 1</option>
                      <option value="Project 2">Project 2</option>
                      <option value="Project 3">Project 3</option>
                  </select>
                </div>
                <div className="col pb-3 pt-2">
                  <label htmlFor="main_kpi" className="form-label">Main KPI <span className="mandatory">*</span></label>
                  <select className="form-select" id="main_kpi" defaultValue="">
                      <option value="">Select main KPI</option>
                      <option value="Main 1">Main 1</option>
                      <option value="Main 2">Main 2</option>
                      <option value="Main 3">Main 3</option>
                  </select>
                </div>
              </div>
              <div className="row row_second">
                <div className="col pb-3">
                  <label htmlFor="modal_unit_kpi" className="form-label"> Unit <span className="mandatory">*</span></label>
                  <input type="text" id="modal_unit_kpi" className="form-control" placeholder="e.g, kwh, %, tons CO2"/>
                </div>
                <div className="col pb-3">
                  <label htmlFor="modal_main_kpi_unit" className="form-label"> Main KPI Unit <span className="mandatory">*</span></label>
                  <input type="text" id="modal_main_kpi_unit" className="form-control" placeholder="Text"/>
                </div>
              </div>
              <div className="row row_third">
                <div className="col pb-3">
                  <label htmlFor="current_baseline_kpi" className="form-label"> Current Baseline <span className="mandatory">*</span></label>
                  <input type="number" id="current_baseline_kpi" className="form-control" placeholder="0"/>
                </div>
                <div className="col pb-3">
                  <label htmlFor="impact_on_main_kpi" className="form-label"> Impact on Main KPI <span className="mandatory">*</span></label>
                  <input type="number" id="impact_on_main_kpi" className="form-control" placeholder="0"/>
                </div>
              </div>
              <div className="row row_fourth">
                <div className="col pb-3">
                  <label htmlFor="modal_target_kpi" className="form-label"> Target <span className="mandatory">*</span></label>
                  <input type="number" id="modal_target_kpi" className="form-control" placeholder="0"/>
                </div>
                <div className="col pb-3">
                  <label htmlFor="modal_emission_factor_kpi" className="form-label"> Emission Factor <span className="mandatory">*</span></label>
                  <input type="number" id="modal_emission_factor_kpi" className="form-control" placeholder="0"/>
                </div>
              </div>
              <div className="row row_fifth">
                <div className="col pb-3"> 
                  <label htmlFor="modal_planned_delta_kpi" className="form-label"> Planned Delta <span className="mandatory">*</span></label>
                  <input type="number" id="modal_planned_delta_kpi" className="form-control" placeholder="0"/>
                </div>
                <div className="col pb-3">
                  <label htmlFor="modal_expected_co2_savings_kpi" className="form-label"> Expected CO2 Savings <span className="mandatory">*</span></label>
                  <input type="number" id="modal_expected_co2_savings_kpi" className="form-control" placeholder="0"/>
                </div>
              </div>
             
            </div>

            {/* Modified the modal body as on 10-02-2026 End  */}


            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary kpi_cancel_btn" onClick={onCloseKPI}> Cancel</button>
              <button type="button" className="btn btn-primary add_kpi_btn">Add KPI</button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default KPIModal;
