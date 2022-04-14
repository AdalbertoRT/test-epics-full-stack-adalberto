import React from "react";

const Modal = () => {
    return (
        <div
            className="modal fade"
            id="customerModal"
            tabindex="-1"
            aria-labelledby="customerModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable bg-white rounded modalEffect">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="customerModalLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
