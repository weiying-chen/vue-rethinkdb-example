import PouchDB from 'pouchdb'
import _ from 'lodash'

const db = new PouchDB('vuedb')
const remotedb = new PouchDB('http://localhost:5984/vuedb')
const store = {}

PouchDB.debug.disable()

store.create = data => {
  return db.post(data)
}

store.find = () => {
  return db.allDocs({include_docs: true})
}

store.findProjects = () => {
  function map (doc, emit) {
    if (doc.type === 'project') {
      emit(doc.createdAt)
    }
  }
  return db.query(map, {include_docs: true}).then(projects =>
    _.map(projects.rows, (project) => project.doc)
  )
}

store.findProjectById = (id) => {
  return db.get(id)
}

store.findFeedsByProjectId = (projectId) => {
  function map (doc, emit) {
    if (doc.projectId === projectId) {
      emit(doc.createdAt)
    }
  }
  return db.query(map, {include_docs: true}).then(feeds =>
    _.map(feeds.rows, (feed) => feed.doc)
  )
}

store.reloadProjects = (obj, prop) => {
  store.findProjects().then(projects => {
    obj[prop] = _.map(projects, (project) => project)
  })
  if (remotedb) {
    db.sync(remotedb)
  }
}

store.reloadFeeds = (obj, prop, projectId) => {
  store.findFeedsByProjectId(projectId).then(feeds => {
    obj[prop] = _.map(feeds, (feed) => feed)
  })
  if (remotedb) {
    db.sync(remotedb)
  }
}

export default store
