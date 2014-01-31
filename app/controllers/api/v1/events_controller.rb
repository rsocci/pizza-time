class Api::V1::EventsController < ApplicationController
  require 'net/http'

  def show
    event_id = params[:id]
    key = ENV['meetup_key']
    uri = URI("http://api.meetup.com/2/event/#{event_id}?&key=#{key}")

    event = JSON.parse(Net::HTTP.get(uri))

    render json: { event: { id: event['id'], name: event['name'], guest_count: event['yes_rsvp_count'] } }
  end
end
