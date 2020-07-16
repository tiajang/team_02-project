"""
This file contains routes related to cusomizing restaurant user's goals.
"""

from flask import Blueprint, render_template, request, redirect
from flask_login import current_user, login_required

bp = Blueprint("goals", __name__)


@bp.route('/')
@login_required
def view_custom_goals():
    """
    When retrieving this route, render a restaurant profile's list of
    customized goals.
    """
    goals = current_user.get_custom_goals()
    return render_template('customization.j2', goals=goals)

@bp.route('/add', methods=['POST'])
@login_required
def add_goal():
    """
    When posting to this route, add the goal given in form.
    Redirect to the goal customization page on completion.
    """
    goal = request.form["goals"]
    current_user.add_custom_goal(goal)
    return redirect("/goals")

@bp.route('/<goal_id>/delete')
@login_required
def delete_goal(goal_id):
    """
    When retrieving this route, delete the goal given by goal_id.
    Redirect to the goal customization page on completion.
    """
    current_user.remove_custom_goal(goal_id)
    return redirect("/goals")
