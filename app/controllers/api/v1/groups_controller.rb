class Api::V1::GroupsController < ApplicationController
  require 'net/http'

  def index
    name = URI.escape params['name']
    city = URI.escape params['city']
    key = ENV['meetup_key']
    uri = URI("http://api.meetup.com/find/groups?&text=#{name}&location=#{city}&key=#{key}")

    groups = JSON.parse(Net::HTTP.get(uri))
    groups.reject!{ |g| g['next_event'] == nil }

    render json: groups
  end
end
