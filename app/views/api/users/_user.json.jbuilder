json.extract! user, :id, :username, :email
json.image user.image ? user.image : ''
json.banner user.banner ? user.banner : ''