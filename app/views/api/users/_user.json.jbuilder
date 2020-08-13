json.extract! user, :id, :username, :email
json.image user.image ? url_for(user.image) : ''
json.banner user.banner ? url_for(user.banner) : ''