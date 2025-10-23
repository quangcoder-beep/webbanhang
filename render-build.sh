#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies
echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput --clear

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate --noinput

# Create cache table if using database cache
echo "Creating cache table..."
python manage.py createcachetable
