import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ msg,onClose }) => {
    return (
        
            <div className="alert alert-info alert-dismissible fade show" role="alert">
                {msg}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        
    )
}

Message.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Message
