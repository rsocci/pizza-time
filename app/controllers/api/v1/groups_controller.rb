class Api::V1::GroupsController < ApplicationController
  require 'net/http'

  def index
    query_string = URI.escape params['queryString']
    key = ENV['meetup_key']
    uri = URI("http://api.meetup.com/find/groups?&text=#{query_string}&key=#{key}")

    groups = JSON.parse(Net::HTTP.get(uri))
    groups.reject!{ |g| g['next_event'] == nil }

    render json: groups
  end
end
