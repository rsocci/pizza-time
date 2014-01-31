PizzaTime::Application.configure do
  # Note: Hashie is a gem dependency
  if ENV['RAILS_ENV'] == 'development'
    config.secrets = Hashie::Mash.new(YAML.load_file(Rails.root.join('config', 'secrets.yml'))[Rails.env.to_s])
    ENV['meetup_key'] = config.secrets.meetup_key
  end
end
