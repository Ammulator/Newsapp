import React from 'react'

const NewsItems =(props)=> {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imgUrl ? imgUrl : "https://media.istockphoto.com/photos/null-picture-id680047738?k=20&m=680047738&s=612x612&w=0&h=TkyoqSPeP7mERqP5AWPnSqudbEdhTORv1NfsI384sb4="} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p><small className="text-danger">By {!author ? "Unkonwn" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItems
